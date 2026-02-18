import ProjectDetail from '@/types/projectDetail';

import { projects } from '@/data/projects';
import { projectDetails } from '@/data/projectDetails';

export default function Projects() {
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
	);
}

