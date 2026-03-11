// 2026 © Pablo Ríos
// Botón de acceso a detalles del proyecto
// Hereda de components/btn

import { CgDetailsMore } from 'react-icons/cg';

import Btn from '@/components/struct/btn';

interface Props {
  link: string;       // Link tal cual sale en project.url.details
  className?: string; // Clases personalizadas opcionales
}

export default function DetailBtn({ link, className }: Props) {
  return (
    <Btn
      href={`/projects/${link}`}
      className={className}
    >
      <CgDetailsMore /> Ver detalles
    </Btn>
  );
}

