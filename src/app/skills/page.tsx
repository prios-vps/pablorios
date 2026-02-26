import Link from 'next/link';

import { skills } from '@/data/ts/skills';

export default function SkillIndex() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Competencias</h1>
      <ul className="space-y-6">
        {skills.map((skill) => (
          <li key={skill.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <Link
              href={`/skills/${skill.slug}`}
              className="mt-3 inline-block text-blue-600 hover:underline"
            >
              {skill.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

