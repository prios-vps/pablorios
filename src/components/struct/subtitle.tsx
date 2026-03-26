import { ReactNode } from 'react';

interface titleProps {
  children: ReactNode;
  className?: string;
}

export default function Subtitle({ children, className }: titleProps) {
  const defaultClasses: string = "flex text-xl text-amber-700 dark:text-slate-400 opacity-75 font-medium italic"
  return <p className={ className || defaultClasses }>{ children }</p>
}

