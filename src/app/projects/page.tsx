import Link from 'next/link';

import { projects } from '@/data/ts/projects';

export default function ProjectIndex() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Proyectos</h1>
      <ul className="space-y-6">
        {projects.map((project) => (
          <li key={project.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600">{project.subtitle}</p>
            <p className="mt-2">{project.description}</p>
            {project.url?.details && (
            <Link
              href={`/projects/${project.url.details}`}
              className="mt-3 inline-block text-blue-600 hover:underline"
            >
              Ver detalles
            </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

