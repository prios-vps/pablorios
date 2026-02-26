// Importaciones desde node
import type { Metadata } from "next";

// Fuentes
import {
  ncm10Serif,
  ncm08Serif,
  ncm10Sans,
  ncm08Sans,
  ncm10Mono,
} from "@/styles/ts/fonts";

// Componentes
import Header from "../components/header";
import Footer from "../components/footer";

// Estilos CSS
import "../styles/css/globals.css";

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

// Base HTML del portafolio.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${ncm10Serif.variable} ${ncm08Serif.variable} ${ncm10Sans.variable} ${ncm08Sans.variable} ${ncm10Mono.variable} antialiased bg-gray-300 text-gray-900 dark:bg-gray-800 dark:text-gray-200`}
      >
        <main className="flex flex-col max-w-7xl mx-auto p-8">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

