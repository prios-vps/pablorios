import { Project } from '@/data/projects';

export function findBySkill(
    projects: Project[],
    skill: string
) {
    return projects.flatMap(project =>
        (project.details ?? [])
        .filter(detail =>
            detail.skills.includes(skill)
        ).map(detalle => ({
            project,
            detalle
        }))
    )
}

