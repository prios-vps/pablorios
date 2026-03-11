// Componentes de node
import Link from 'next/link';

// Componentes internos
import T2 from '@/components/struct/t2';

// Información
import { skills } from '@/data/ts/skills';

export default function SkillIndex() {
  return (
    <>
      <T2>Competencias</T2>
      <ul className="flex flex-col justify-center gap-3 flex-wrap md:flex-row">
        {skills.map((skill) => (
          <li key={skill.id} className="flex m-0 p-0">
            <Link
              href={`/skills/${skill.slug}`}
              className="flex justify-center min-w-60 border rounded-lg p-2 text-xl font-bold shadow-sm hover:shadow-md dark:hover:bg-gray-200 dark:hover:text-gray-800 transition"
            >
              {skill.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

