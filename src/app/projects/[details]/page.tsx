// Importaciones de node_modules
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';

// Importaciones internas del proyecto
// Tipos
import Project from '@/types/project';
// Datos (TS)
import { projects } from '@/data/ts/projects';
// Datos (MDX, obtenidos con función)
import { getAllProjectDetails } from '@/lib/projectDetails';
// Configuraciones globales de compilador de MDX
import { mdxOptions } from '@/lib/mdxOptions';
// Definición de componentes
import { components } from '@/components/mdx-components';

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

  const project = projects.find((p: Project) => p.url?.details === details);

  if (!project) return notFound();

  const allDetails = getAllProjectDetails();

  // Filtrar detalles relacionados a este proyecto
  //const detailList = projectDetails.filter((d) => d.idProject === project.id);

  // Filtrar por proyecto
  const filtered = allDetails
    .filter((detail) => detail.projectId === project.id)
    .sort((a, b) => {
      return a.problemId - b.problemId;
    });

  const renderedContent = await Promise.all(
    filtered.map(async (detail) => {
      const { content } = await compileMDX({
        source: detail.content,
        components,
        options: { mdxOptions },
      });
      return content
    })
  );

  return (
    <>
      <Link href="/projects" className="ncm8serif pb-6">
        &larr; Volver al listado de proyectos
      </Link>
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <h2 className="text-xl text-gray-700 mb-4">{project.subtitle}</h2>
      <p className="mb-6">{project.description}</p>

      <section className="space-y-6">
        {renderedContent.map((content, index) => (
          <article key={index} className="prose prose-invert max-w-none">
            { content }
          </article>
        ))}
      </section>
    </>
  );
}

