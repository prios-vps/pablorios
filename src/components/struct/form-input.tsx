// © 2026 Pablo Ríos
// Entrada de formulario
interface Props {
  fieldName: string;
  displayName: string;
  inputType?: string;
  placeholder?: string;
  colSpan?: boolean;
  requiredField?: boolean;
}

export default function FormInput({fieldName, displayName, inputType='text', placeholder='', colSpan=false, requiredField=true}: Props) {
  const inputCommonClasses = 'flex dark:bg-neutral-900 border dark:border-stone-300 rounded-xs p-1';
  const optionalText = requiredField ? '' : ' (Opcional)';
  let span = '';

  if (colSpan) span = ` md:col-span-full`;

  return (
    <div className={`flex flex-col gap-1${span}`}>
      <label htmlFor={fieldName} className='text-sm font-bold'>{`${displayName}${optionalText}`}</label>
      {
        inputType === 'textarea'
          ? (
            <textarea id={fieldName} name={fieldName} className={`${inputCommonClasses} resize-none`} placeholder={placeholder} required={requiredField}></textarea>
          ) : (
            <input id={fieldName} name={fieldName} type={inputType} className={`${inputCommonClasses}`} placeholder={placeholder} required={requiredField} />
          )
      }
    </div>
  );
}
