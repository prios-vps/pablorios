// 2026 © Pablo Ríos
// Licencia MIT
// Item con proyecto individual

// Importaciones internas
// Componentes
import T3 from '@/components/struct/t3';
import Subtitle from '@/components/struct/subtitle';
import Description from '@/components/struct/description';
import DetailBtn from '@/components/project/btn/detail-btn';
import DemoBtn from '@/components/project/btn/demo-btn';
import DlBtn from '@/components/project/btn/dl-btn';
import GithubBtn from '@/components/project/btn/github-btn';
// Estilos
import { defaultPalette } from '@/styles/ts/palette';
// Tipo
import Project from '@/types/project';

interface Props {
  project: Project;
}

export default function ProjectItem({ project }: Props) {
  return (
    <li className={`border border-l-3 p-6 shadow-sm ${defaultPalette.shadow} ${defaultPalette.darkShadow} hover:shadow-md transition`}>
      <T3>{project.title}</T3>
      <Subtitle>{project.subtitle}</Subtitle>
      <Description>{project.description}</Description>
      {project.url && (
        <div className='grid grid-cols-1 mt-3 sm:grid-cols-2 md:flex md:flex-row gap-3 justify-center'>
          {project.url?.details && <DetailBtn link={project.url.details} />}
          {project.url?.demo && <DemoBtn link={project.url.demo} />}
          {project.url?.download && <DlBtn link={project.url.download} />}
          {project.url?.github && <GithubBtn link={project.url.github} />}
        </div>
      )}
    </li>
  );
}

