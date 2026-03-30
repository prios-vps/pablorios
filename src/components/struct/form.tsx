'use client'

import FormInput from '@/components/struct/form-input';

export default function Form() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const formDataObject = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    console.log('formDataObject = ', formDataObject);

    const response = await fetch('/api/contact/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataObject),
    });

    const result = await response.json();
    console.log(result); // por ahora solo ver la respuesta en la consola bastará
  };

  return (
    <form method='POST' onSubmit={handleSubmit} className='flex flex-col w-full max-w-2xl'>
      <fieldset className='grid grid-cols-1 gap-2 md:grid-cols-2'>
        <FormInput fieldName='name' displayName='Nombre' />
        <FormInput fieldName='company' displayName='Empresa' requiredField={false} />
        <FormInput fieldName='email' displayName='Correo Electrónico' />
        <FormInput fieldName='phone' displayName='Teléfono' requiredField={false} />
        <FormInput fieldName='message' displayName='Mensaje' inputType="textarea" colSpan />
      </fieldset>
      <input type='submit' value='Enviar' className='' />
    </form>
  );
}