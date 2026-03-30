import { Resend } from 'resend';

import Message from '@/types/message';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, phone, message } = body;

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

    const tr = typeof response;

    return Response.json({ ok: true, tr, response }, { status: 200 });
  } catch (error) {
    return Response.json({ ok: false, error }, { status: 500 });
  }
}

