import type { Metadata } from "next";
import { ncm10Serif } from "@/styles/ts/fonts";
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
    <html lang="en">
      <body
        className={`${ncm10Serif.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
