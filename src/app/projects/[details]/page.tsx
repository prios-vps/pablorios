// 2026 © Pablo Ríos
// Licencia MIT
// Página individual de detalles de proyecto

// Importaciones de node_modules
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';

// Importaciones internas del proyecto
import T2 from '@/components/struct/t2';
import Subtitle from '@/components/struct/subtitle';
import Description from '@/components/struct/description';
// Tipos
import Project from '@/types/project';
// Datos (TS)
import { projects } from '@/data/ts/projects';
// Datos (MDX, obtenidos con función)
import { getAllProjectDetails } from '@/lib/projectDetails';
// Configuraciones globales de compilador de MDX
import { mdxOptions } from '@/lib/mdxOptions';
// Definición de componentes
import { components } from '@/components/struct/mdx-components';

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

  // Filtrar por proyecto
  const filtered = allDetails
    .filter((detail) => detail.projectId === project.id)
    .sort((a, b) => {
      return a.problemId - b.problemId;
    });

  // Retorna una lista con los componentes renderizados
  // desde la carpeta data/mdx/projectDetails/<carpeta del proyecto>
  // ordenados por id del problema solucionado
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
      <T2 className='flex justify-center text-3xl font-bold'>{project.title}</T2>
      <Subtitle
        className='flex justify-center my-2 text-xl text-gray-700 dark:text-gray-400 font-medium italic'
      >
        {project.subtitle}
      </Subtitle>
      <Description>{project.description}</Description>

      <section className="space-y-6">
        {renderedContent.map((content, index) => (
          <article key={index} className='flex flex-col w-full'>
            { content }
          </article>
        ))}
      </section>
    </>
  );
}

