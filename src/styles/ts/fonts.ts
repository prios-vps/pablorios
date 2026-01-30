import localFont from 'next/font/local'

// 1. FUENTE PRINCIPAL (SERIF)
// 1.1 10 => Encabezados y fuentes mayores
export const ncm10Serif = localFont({
  src: [
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCM10-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCM10-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCM10-Book.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCM10-BookItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCM10-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCM10-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-ncm-10-serif'
})

// 1.2 08 => Párrafos
export const ncm08Serif = localFont({
  src: [
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCM08-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCM08-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCM08-Book.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCM08-BookItalic.woff2',
      weight: '500',
      style: 'italic',
    },
  ],
  variable: '--font-ncm-08-serif'
})

// 2. FUENTE SECUNDARIA (SANS)
// 2.1 10 => Encabezados y fuentes mayores
export const ncm10Sans = localFont({
  src: [
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCMSans10-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCMSans10-Oblique.woff2',
      weight: '400',
      style: 'oblique',
    },
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCMSans10-Book.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCMSans10-BookOblique.woff2',
      weight: '500',
      style: 'oblique',
    },
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCMSans10-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCMSans10-BoldOblique.woff2',
      weight: '700',
      style: 'oblique',
    },
  ],
  variable: '--font-ncm-10-sans'
})

// 2.2 08 => Párrafos
export const ncm08Sans = localFont({
  src: [
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCMSans08-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCMSans08-Oblique.woff2',
      weight: '400',
      style: 'oblique',
    },
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCMSans08-Book.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCMSans08-BookOblique.woff2',
      weight: '500',
      style: 'oblique',
    },
  ],
  variable: '--font-ncm-08-sans'
})

// 3. FUENTE MONO
// 3.1 Solo hay un tamaño de esta fuente
export const ncm10Mono = localFont({
  src: [
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCMMono10-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCMMono10-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCMMono10-Book.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCMMono10-BookItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCMMono10-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/NewComputerModern/woff2/NewCMMono10-BoldOblique.woff2',
      weight: '700',
      style: 'oblique',
    },
  ],
  variable: '--font-ncm-10-mono'
})
