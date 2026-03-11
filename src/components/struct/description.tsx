import { ReactNode } from 'react';

interface titleProps {
  children: ReactNode;
  className?: string;
}

export default function Description({ children, className }: titleProps) {
  const defaultClasses: string = "flex text-md"
  return <p className={ className || defaultClasses }>{ children }</p>
}

