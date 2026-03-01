// Importaciones de node_modules
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';

// Importaciones internas del proyecto
// Tipos
import Skill from '@/types/skill';
// Datos
import { skills } from '@/data/ts/skills';
// Detalles de @/data/mdx usando una función que
// los obtiene de todas las carpetas de proyectos
import { getAllProjectDetails } from '@/lib/projectDetails';
// Configuraciones globales de compilación de MDX
import { mdxOptions } from '@/lib/mdxOptions';
// Definición de componentes
import { components } from '@/components/mdx-components';

interface SkillPageProps {
  params: { slug: string };
}

// Esta función le dice a Next.js qué rutas estáticas generar
export function generateStaticParams() {
  return skills.map((s: Skill) => ({ slug: s.slug! }));
}

export default async function SkillDetailPage({ params }: SkillPageProps) {
  const { slug } = await params;

  // Encuentra la competencia por el slug para mostrarla
  // en la estructura de abajo.
  const skill = skills.find((s: Skill) => s.slug === slug); 
  // Si no encuentra ninguna entonces lanza error 404
  if (!skill) return notFound();

  
  const allDetails = getAllProjectDetails();

  // Filtrar por skill
  const filtered = allDetails
    .filter((detail) => detail.skillIds.includes(skill.id))
    .sort((a, b) => {
      if (a.projectId !== b.projectId) {
        return a.projectId - b.projectId;
      }
      return a.problemId - b.problemId;
    });

  const renderedContent = await Promise.all(
    filtered.map(async (detail) => {
      const { content } = await compileMDX({
        source: detail.content,
        components,
        options: { mdxOptions },
      });
      return content;
    })
  );

  return (
    <>
      <Link href="/skills" className="ncm08serif pb-6">
        &larr; Volver a listado de competencias
      </Link>

      <h1 className="text-3xl font-bold mb-2">{skill.name}</h1>

      {skill.description && (
        <h2 className="text-xl text-gray-300 mb-4">{skill.description}</h2>
      )}

      <div className="space-y-12">
        {renderedContent.map((content, index) => (
          <article key={index} className="prose prose-invert max-w-none">
            {content}
          </article>
        ))}
      </div>
    </>
  );
}

