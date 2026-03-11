import { ReactNode } from 'react';

interface titleProps {
  children: ReactNode;
  className?: string;
}

export default function Subtitle({ children, className }: titleProps) {
  const defaultClasses: string = "flex text-xl text-gray-700 dark:text-gray-400 font-medium italic"
  return <p className={ className || defaultClasses }>{ children }</p>
}

