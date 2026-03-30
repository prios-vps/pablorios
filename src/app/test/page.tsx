'use client'

export default function TestPage() {
  type ContactFormData = {
    name: string;
    email: string;
    message: string;
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const data: ContactFormData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    const res = await fetch('/api/test2', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log(result);
  }

  return (
    <div>
      <h2>formulario</h2>
      <form action='/api/test2' method='post' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Nombre: </label>
          <input id='name' name='name' />
        </div>
        <div>
          <label htmlFor='email'>Correo: </label>
          <input id='email' name='email' />
        </div>
        <div>
          <label htmlFor='message'>Mensaje: </label>
          <input id='message' name='message' />
        </div>
        <input type='submit' />
      </form>
    </div>
  );
}

