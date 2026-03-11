// 2026 © Pablo Ríos
// Botón de acceso a live demo del proyecto
// Hereda de components/btn

import { IoPlay } from "react-icons/io5";

import Btn from '@/components/struct/btn';

interface Props {
  link: string;       // Link tal cual sale en project.url.demo
  className?: string; // Clases personalizadas opcionales
}

export default function DemoBtn({ link, className }: Props) {
  return (
    <Btn
      href={link}
      className={className}
    >
      <IoPlay /> Ir a Demo
    </Btn>
  );
}

