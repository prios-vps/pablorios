import Link from 'next/link';

import { skills } from '@/data/ts/skills';

export default function SkillIndex() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Competencias</h1>
      <ul className="flex flex-col justify-between gap-2 flex-wrap md:flex-row">
        {skills.map((skill) => (
          <li key={skill.id} className="flex justify-center min-w-60 border rounded-lg p-2 shadow-sm hover:shadow-md transition">
            <Link
              href={`/skills/${skill.slug}`}
              className="flex"
            >
              {skill.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

