import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const response = await resend.emails.send({
      from: 'Tu Nombre <onboarding@resend.dev>',
      to: ['pablo_rios_p@protonmail.com'],
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ ok: true, response });
  } catch (error) {
    return Response.json({ ok: false, error });
  }
}

