import Link from 'next/link';

import ProjectDetail from '@/types/projectDetail';

import { projects } from '@/data/projects';
//import { projectDetails } from '@/data/projectDetails';

export default function Projects() {
  return (
    <main className="max-w-4xl mx-auto p-6">
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
    </main>
  );
  /*
  const detailsByProject: Record<number, ProjectDetail[]> = {};

  for (const detail of projectDetails) {
    const projectId = detail.idProject;

    if (!detailsByProject[projectId]) {
      detailsByProject[projectId] = [];
    }

    detailsByProject[projectId].push(detail);
  }

  return (
    <section className="grid gap-8">
      {projects.map((project) => (
        <div key={`project-${project.id}`} className="border-l-4 pl-4">
          <h2 className="text-2xl font-semibold">
            {project.title}
          </h2>
          <p className="mt-2">
            {project.description}
          </p>
          <div>
            {detailsByProject[project.id]?.map((projectDetail) => (
              <div
                key={`project-detail-${project.id}-${projectDetail.id}`}
              >
                <div>{projectDetail.title}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );*/

}

