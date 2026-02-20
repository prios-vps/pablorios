import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { projectDetails } from '@/data/projectDetails';

interface ProjectPageProps {
  params: { details: string };
}

// Esta función le dice a Next.js qué rutas estáticas generar
export function generateStaticParams() {
  return projects
    .filter((p) => p.url?.details) // solo proyectos que tienen detalles
    .map((p) => ({ details: p.url!.details! }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { details } = await params;

  const project = projects.find((p) => p.url?.details === details);

  if (!project) return notFound();

  // Filtrar detalles relacionados a este proyecto
  const detailList = projectDetails.filter((d) => d.idProject === project.id);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <h2 className="text-xl text-gray-700 mb-4">{project.subtitle}</h2>
      <p className="mb-6">{project.description}</p>

      <section className="space-y-6">
        {detailList.map((detail) => (
          <div key={detail.id} className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-lg">{detail.title}</h3>
            <p className="mt-1"><strong>Problema:</strong> {detail.problem}</p>
            <p className="mt-1"><strong>Solución:</strong> {detail.solution}</p>
            {detail.impact && <p className="mt-1"><strong>Impacto:</strong> {detail.impact}</p>}
          </div>
        ))}
      </section>
    </main>
  );
}

