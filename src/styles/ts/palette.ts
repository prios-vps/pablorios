import type Palette from '@/types/palette';

export const defaultPalette: Palette = {
  bg: 'bg-gray-300',
  fg: 'text-gray-900',
  shadow: 'shadow-gray-900/50',
  darkBg: 'dark:bg-gray-800',
  darkFg: 'dark:text-gray-200',
  darkShadow: 'dark:shadow-gray-200/50',
  hoverBg: 'hover:bg-gray-900',
  hoverFg: 'hover:text-gray-300',
  darkHoverBg: 'hover:dark:bg-gray-200',
  darkHoverFg: 'hover:dark:text-gray-800',
}

export function stringPalette (palette?: Partial<Palette>): string {
  // La paleta de colores se carga con los valores especificados o valores por defecto
  const renderedPalette: Palette = {
    ...defaultPalette,
    ...palette,
  }

  return Object.values(renderedPalette).join(" ");
}

