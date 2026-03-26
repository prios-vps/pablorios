import T2 from '@/components/struct/t2';
import FormInput from '@/components/struct/form-input';

export default function ContactPage() {
  return (
    <>
      <T2>Formulario de Contacto</T2>
      <form action='' method='POST' className='flex flex-col gap-2'>
        <FormInput name='Nombre' />
        <FormInput name='Empresa' requiredField={false} />
        <FormInput name='Correo Electrónico' />
        <FormInput name='Teléfono' requiredField={false} />
        <FormInput name='Mensaje' inputType="textarea" />
        <input type='submit' value='Enviar' className='' />
      </form>
    </>
  );
}

