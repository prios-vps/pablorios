// 2026 @ Pablo Ríos
// Licencia MIT
// Layout principal del portafolio

// Importaciones desde node
// Tipos
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

// Fuentes
/*import {
  ncm10Serif,
  ncm08Serif,
  ncm10Sans,
  ncm08Sans,
  ncm10Mono,
} from "@/styles/ts/fonts";
 */
// Componentes
import Header from '@/components/main/header';
import Footer from '@/components/main/footer';

// Estilos CSS
import '@/styles/css/globals.css';

// Metadatos <meta>
export const metadata: Metadata = {
  title: "Analista Programador - Pablo Ríos",
  description:
    "Analista programador especializado en sistemas GNU/Linux y aplicaciones web, ERP y bases de datos",
  robots: {
    index: false,
    follow: false,
  },
};

interface Props {
  children: ReactNode;
}

// Base HTML del portafolio.
export default function RootLayout({ children }: Props) {
  return (
    <html lang="es">
      {/*<body
        className={`${ncm10Serif.variable} ${ncm08Serif.variable} ${ncm10Sans.variable} ${ncm08Sans.variable} ${ncm10Mono.variable} antialiased bg-gray-300 text-gray-900 dark:bg-gray-800 dark:text-gray-200`}
      >*/}
      <body
        className={`flex min-h-screen antialiased bg-stone-100 text-slate-900 dark:bg-black dark:text-stone-300 pf-text-shadow`}
      >
        <main className="flex flex-col grow-1 max-w-7xl mx-auto p-8">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

