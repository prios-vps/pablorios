// 2026 © Pablo Ríos
// Botón de descarga de demo del proyecto
// Hereda de components/btn

import { IoMdDownload } from "react-icons/io";

import Btn from '@/components/struct/btn';

interface Props {
  link: string;       // Link tal cual sale en project.url.details
  className?: string; // Clases personalizadas opcionales
}

export default function DlBtn({ link, className }: Props) {
  return (
    <Btn
      href={link}
      className={className}
    >
      <IoMdDownload /> Descargar
    </Btn>
  );
}

