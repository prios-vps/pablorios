import mysql from 'mysql2/promise';
import { Resend } from 'resend';

import type Message from '@/types/message';

export async function POST(req: Request) {
  // FASE 1: Obtención de datos del formulario
  try {
    // Obtener el cuerpo de la solicitud POST, y luego
    // obtener en un arreglo los datos del formulario
    const body = await req.json();
    const { name, company, email, phone, message }: Message = body;
  } catch (error) {
    return Response.json({
      ok: false,
      message: 'Problema al obtener los datos ¿Información incompleta?',
      errorDump: error
    }, { status: 500 });
  }

  // FASE 2: Creación de bjeto para almacenar los estados
  // de ambas solicitudes. Si fallan dependerá de cuáles
  // fallen cómo reaccionará el sistema.
  type ContactStatusProps = {
    ok: boolean;
    message: string;
    errorDump?: Error;
    dataDump?: object;
  };

  type ContactStatusObject = {
    db: ContactStatusProps;
    mail: ContactStatusProps;
  };

  const contactStatus: ContactStatusObject = {
    db: {
      ok: false,
      message: 'No cargado',
    },
    mail: {
      ok: false,
      message: 'No cargado',
    },
  };

  // FASE 3: Almacenado de respaldo del mensaje en
  // la base de datos. Esto ayudará a que si el
  // mensaje no se envía al menos quede guardado y
  // yo pueda consultarlo una vez al día.
  try {
    // Datos de la conexión
    const connectionParams = {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PSWD,
      database: process.env.DB
    };

    const connection = await mysql.createConnection(connectionParams);

    const insertQuery = 'INSERT INTO inbox (name, company, mail, phone, message) VALUES (":name", ":company", ":mail", ":phone", ":message");';

    const values: object = { name, company, mail, phone, message };

    const [results] = await connection.execute(insertQuery, values)

    connection.end()

    contactStatus.db.ok = true;
    contactStatus.db.message = 'Los datos han sido guardados con éxito.';
  } catch (error) {
    contactStatus.db.ok = false;
    contactStatus.db.message = 'Hubo un error al almacenar los datos en la base de datos.';
    contactStatus.db.errorDump = error as Error;
  }

  // FASE 4: Envío del correo
  try {
    const response = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['pablo_rios_p@protonmail.com'],
      subject: `Mensaje de ${name}`,
      html: `
      <div>
        <ul>
          <li>Nombre: ${name}</li>
          <li>Empresa: ${company}</li>
          <li>Correo: <a href='mailto:${email}'}>${email}</a></li>
          <li>Teléfono: <a href='tel:${phone}'>${phone}</a></li>
        </ul>
        <div>${message}</div>
      </div>
      `,
    });

    contactStatus.mail.ok = true;
    contactStatus.mail.message = 'El correo ha sido enviado con éxito.';
    contactStatus.mail.dataDump = response;
  } catch (error) {
    contactStatus.mail.ok = false;
    contactStatus.mail.message = 'Hubo un error al intentar enviar el correo.';
    contactStatus.mail.errorDump = error as Error;
  }

  // FASE 4: Decidir la respuesta en base a los resultados del proceso
  // Por ahora el foco está en cómo se mostrará la información al usuario
  // además de un logging mínimo en consola.

  // Si el envío sale bien se muestra el mensaje correspondiente al usuario.
  if (contactStatus.mail.ok) {
    return Response.json({ status: 0, message: '¡Mensaje enviado!' }, { status: 200 });
  }

  // Si el envío falla (por ejemplo, se alcanza el límite de Resend)
  // se envía otro mensaje pero se asume bien al haberse guardado el respaldo.
  if (contactStatus.db.ok) {
    return Response.json({ status: 1, message: 'No se pudo enviar el mensaje pero fue almacenado en la base de datos.' }, { status: 200 });
  }

  // Si todo falla se muestra un mensaje distinto.
  return Response.json({ status: 2, message: 'No se pudo hacer el envío ni se pudo almacenar el respaldo del mensaje.', dump: contactStatus }, { status: 500 });
}
