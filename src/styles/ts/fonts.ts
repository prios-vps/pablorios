import localFont from 'next/font/local'

// 1. FUENTE PRINCIPAL (SERIF) - Usando las variantes de tamaño 10
export const ncmSerif = localFont({
  src: [
    { path: '../../public/fonts/NewComputerModern/woff2/NewCM10-Book.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/NewComputerModern/woff2/NewCM10-BookItalic.woff2', weight: '400', style: 'italic' },
    { path: '../../public/fonts/NewComputerModern/woff2/NewCM10-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../../public/fonts/NewComputerModern/woff2/NewCM10-BoldItalic.woff2', weight: '700', style: 'italic' },
  ],
  variable: '--font-ncm-serif'
})

// 2. FUENTE SANS (Sín remates)
export const ncmSans = localFont({
  src: [
    { path: '../../public/fonts/NewComputerModern/woff2/NewCMSans10-Book.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/NewComputerModern/woff2/NewCMSans10-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-ncm-sans'
})

// 3. FUENTE MONO (Para código)
export const ncmMono = localFont({
  src: [
    { path: '../../public/fonts/NewComputerModern/woff2/NewCMMono10-Book.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/NewComputerModern/woff2/NewCMMono10-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-ncm-mono'
})
