import Project from '@/types/project';

export function findBySkill(
  projects: Project[],
  skill: string
) {
  return projects.flatMap(project =>
    (project.details ?? [])
    .filter(details =>
      details.skills.includes(skill)
    ).map(detail => ({
      project,
      detail
    }))
  )
}

