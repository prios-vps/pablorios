import Message from '@/types/message';

export function EmailTemplate({ name, company='', email, phone='', message }: Message) {
  return (
    <div>
      <ul>
        <li>Nombre: {name}</li>
        {company && (<li>Empresa: {company}</li>)}
        <li>Correo: <a href={`mailto:${email}`}>{email}</a></li>
        {phone && (<li>Teléfono: <a href={`tel:${phone}`}>{phone}</a></li>)}
      </ul>
      <div>{message}</div>
    </div>
  );
}
