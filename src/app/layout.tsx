import type { Metadata } from "next";
import {
  ncm10Serif,
  ncm08Serif,
  ncm10Sans,
  ncm08Sans,
  ncm10Mono
} from "@/styles/ts/fonts";
import "../styles/css/globals.css";

export const metadata: Metadata = {
  title: "Analista Programador - Pablo Ríos",
  description: "Analista programador especializado en sistemas GNU/Linux y aplicaciones web, ERP y bases de datos",
  robots: {
    index: false,
    follow: false,
  },
};

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
        {children}
      </body>
    </html>
  );
}
