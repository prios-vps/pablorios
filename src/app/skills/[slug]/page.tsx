import { projects } from '@/data/projects'
import { findBySkill } from '@/lib/findBySkill'

export default function CompetenciaPage({
  params
}: {
  params: { slug: string }
}) {
  const results = findBySkill(projects, params.slug)

  return (
    <div>
      <h1>Competencia: {params.slug}</h1>

      {results.map(({ project, detail }) => (
        <section key={`${project.id}-${detail.id}`}>
          <h2>{detail.title}</h2>
          <p>{detail.description}</p>
          <small>Proyecto: {project.title}</small>
        </section>
      ))}
    </div>
  )
}

