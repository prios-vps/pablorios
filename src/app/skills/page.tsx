// Componentes de node
import Link from 'next/link';

// Componentes internos
import T2 from '@/components/struct/t2';
import SkillItem from '@/components/skill/skill-item';

// Información
import { skills } from '@/data/ts/skills';

export default function SkillIndex() {
  return (
    <>
      <T2>Competencias</T2>
      <ul className="flex flex-col justify-center gap-3 flex-wrap md:flex-row">
        {skills.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </ul>
    </>
  );
}

