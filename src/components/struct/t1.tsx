// 2026 © Pablo Ríos
// Licencia MIT
// Cabecera principal del sitio

// Importación de tipo
import type { ReactNode } from 'react';

// Tipos de entrada
interface Props {
  children: ReactNode;  // Deseable solo texto
  className?: string;   // Las clases personalizadas son opcionales
}

export default function T1({ children, className }: Props) {
  const defaultClasses: string = "ncm10serif flex justify-start text-4xl font-bold not-italic";
  return <h1 className={ className || defaultClasses }>{ children }</h1>
}

