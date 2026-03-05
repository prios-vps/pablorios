import { ReactNode } from 'react';

interface titleProps {
  children: ReactNode;
  className?: string
}

export default function T1({ children, className }: titleProps) {
  const defaultClasses: string = "flex justify-center text-3xl font-bold mb-6";
  return <h1 className={ className || defaultClasses }>{ children }</h1>
}

