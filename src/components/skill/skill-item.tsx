// 2026 © Pablo Ríos
// Licencia MIT
// Item con competencia individual

// Importaciones internas
// Componentes
import T3 from '@/components/struct/t3';
import Description from '@/components/struct/description';
import Btn from '@/components/struct/btn';
// Estilos
import { defaultPalette } from '@/styles/ts/palette';
// Tipo
import Skill from '@/types/skill';

interface Props {
  skill: Skill;
}

export default function SkillItem({ skill }: Props) {
  return (
    <li className={`border border-l-3 p-6 shadow-sm ${defaultPalette.shadow} ${defaultPalette.darkShadow} hover:shadow-md transition`}>
      <T3>{skill.name}</T3>
      {skill.description && <Description>{skill.description}</Description>}
      <Btn href={`/skills/${skill.slug}`}>
        Ver aplicaciones de esta competencia en proyectos
      </Btn>
    </li>
  );
}

