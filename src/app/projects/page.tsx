// 2026 © Pablo Ríos
// Licencia MIT
// Página de listado de proyectos

// Importaciones desde node_modules
import Link from 'next/link';

// Importaciones internas
// Componentes
import T2 from '@/components/struct/t2';
import ProjectItem from '@/components/project/project-item';
// Datos
import { projects } from '@/data/ts/projects';

export default function ProjectIndex() {
  return (
    <>
      <T2>Proyectos</T2>
      <ul className='grid grid-cols-1 gap-6'>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </ul>
    </>
  );
}

