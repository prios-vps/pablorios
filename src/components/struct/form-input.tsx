// © 2026 Pablo Ríos
// Entrada de formulario
import { toSlug } from '@/lib/utils';

interface Props {
  name: string;
  maxCols?: number;
  inputType?: string;
  placeholder?: string;
  requiredField?: boolean;
}

export default function FormInput({name, maxCols=2, inputType='text', placeholder='', requiredField=true}: Props) {
  const slug = toSlug(name);
  const inputCommonClasses = 'flex dark:bg-neutral-900 border dark:border-stone-300 rounded-xs p-1';
  const optionalText = requiredField ? '' : ' (Opcional)';
  let widthClasses = '';

  if (maxCols > 1) widthClasses += ' md:w-1/2';
  if (maxCols > 2) widthClasses += ' lg:w-1/3';

  return (
    <div className={`flex flex-col gap-1 w-full${widthClasses}`}>
      <label htmlFor={slug} className='text-sm font-bold'>{`${name}${optionalText}`}</label>
      {
        inputType === 'textarea'
          ? (
            <textarea id={slug} name={slug} className={`${inputCommonClasses} resize-none`} placeholder={placeholder} required={requiredField}></textarea>
          ) : (
            <input id={slug} name={slug} className={`${inputCommonClasses}`} placeholder={placeholder} required={requiredField} />
          )
      }
    </div>
  );
}
