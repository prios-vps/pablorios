// 2026 © Pablo Ríos
// Botón de propósito general
// De este heredan los botones de proyectos y competencias

import { ReactNode } from 'react';
import Link from 'next/link';

import type Palette from '@/types/palette';
import { stringPalette, defaultPalette } from '@/styles/ts/palette';

interface Props {
  children: ReactNode;  // Normalmente icono + texto
  href: string;         // Dirección obligatoria
  className?: string;   // Clases personalizadas opcionales
  palette?: Palette;     // Paleta Tailwind para el botón.
}

export default function Btn({ children, href, className, palette }: Props) {

  // La paleta de colores se carga con los valores especificados o valores por defecto
  const renderedPalette: Palette = {
    bg: palette?.bg || defaultPalette.bg,
    fg: palette?.fg || defaultPalette.fg,
    shadow: palette?.shadow || defaultPalette.shadow,
    darkBg: palette?.darkBg || defaultPalette.darkBg,
    darkFg: palette?.darkFg || defaultPalette.darkFg,
    darkShadow: palette?.darkShadow || defaultPalette.darkShadow,
    hoverBg: palette?.hoverBg || defaultPalette.hoverBg,
    hoverFg: palette?.hoverFg || defaultPalette.hoverFg,
    darkHoverBg: palette?.darkHoverBg || defaultPalette.darkHoverBg,
    darkHoverFg: palette?.darkHoverFg || defaultPalette.darkHoverFg,
  }

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

