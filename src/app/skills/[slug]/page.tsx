import Link from 'next/link';
import { notFound } from 'next/navigation';

import Skill from '@/types/skill';

import { skills } from '@/data/ts/skills';

interface SkillPageProps {
  params: { slug: string };
}

// Esta función le dice a Next.js qué rutas estáticas generar
export function generateStaticParams() {
  return skills.map((s: Skill) => ({ slug: s.slug! }));
}

export default async function ProjectDetailPage({ params }: SkillPageProps) {
  const { slug } = await params;

  const skill = skills.find((s: Skill) => s.slug === slug); 

  if (!skill) return notFound();

  // Filtrar detalles relacionados a este proyecto
  //const detailList = projectDetails.filter((d) => d.idProject === project.id);

  return (
    <>
      <Link href="/skills" className="ncm08serif pb-6">
        &larr; Volver a listado de competencias
      </Link>
      <h1 className="text-3xl font-bold mb-2">{skill.name}</h1>
      { skill.description && (
        <h2 className="text-xl text-gray-300 mb-4">{skill.description}</h2>
      )}
    </>
  );
}

