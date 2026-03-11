// 2026 © Pablo Ríos
// Botón de acceso a detalles del proyecto
// Hereda de components/btn

import { IoLogoGithub } from "react-icons/io5";

import Btn from '@/components/struct/btn';

interface Props {
  link: string;       // Link tal cual sale en project.url.details
  className?: string; // Clases personalizadas opcionales
}

export default function GithubBtn({ link, className }: Props) {
  return (
    <Btn
      href={link}
      className={className}
    >
      <IoLogoGithub /> Código
    </Btn>
  );
}

