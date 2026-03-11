// 2026 © Pablo Ríos
// Licencia MIT
// Cabecera secundaria h2

// Importación de tipo para hijo
import type { ReactNode } from 'react';

// Declaración de tipos de entrada
interface titleProps {
  children: ReactNode;
  className?: string;   // Clases personalizadas opcionales
}

export default function T2({ children, className }: titleProps) {
  // Clases por defecto por uniformidad
  const defaultClasses: string = "flex justify-center text-3xl font-bold mb-6";
  return <h2 className={ className || defaultClasses }>{ children }</h2>
}

