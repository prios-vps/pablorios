import { projects } from '../../data/projects';

export default function Projects() {
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
          <span className="text-sm font-mono p-1">
            {project.tags.join(' ')}
          </span>
        </div>
      ))}
    </section>
  );
}
