// 2026 © Pablo Ríos
// Licencia MIT
// Cabecera terciaria h3

// Importación de tipo para nodo hijo
import type { ReactNode } from 'react';

// Declaración de tipos de entrada
interface titleProps {
  children: ReactNode;
  className?: string;   // Clases personalizadas opcionales
}

export default function T3({ children, className }: titleProps) {
  // Clases por defecto para uniformidad
  const defaultClasses: string = "flex text-2xl font-semibold";
  return <h3 className={ className || defaultClasses }>{ children }</h3>
}

