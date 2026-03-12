// 2026 © Pablo Ríos
// Botón de propósito general
// De este heredan los botones de proyectos y competencias

import { ReactNode } from 'react';
import Link from 'next/link';

import type Palette from '@/types/palette';
import { stringPalette } from '@/styles/ts/palette';

interface Props {
  children: ReactNode;  // Normalmente icono + texto
  href: string;         // Dirección obligatoria
  className?: string;   // Clases personalizadas opcionales
  palette?: Palette;     // Paleta Tailwind para el botón.
}

export default function Btn({ children, href, className, palette }: Props) {
  const classPalette: string = stringPalette();

  // Por uniformidad se definen clases Tailwind por defecto
  const defaultClasses: string = `flex justify-center items-center gap-2 border rounded-md p-2 text-xl font-bold shadow-sm hover:shadow-md transition ${classPalette}`;
  return (
    <Link
      href={href}
      className={className || defaultClasses}
    >
      {children}
    </Link>
  );
}

