import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ProjectDetailMeta {
  projectId: number;
  problemId: number;
  skillIds: number[];
  content: string;
  slug: string;
}

const basePath = path.join(
  process.cwd(),
  'src/data/mdx/projectDetails'
);

export function getAllProjectDetails(): ProjectDetailMeta[] {
  // Obtiene los nombres de las carpetas dentro de @/data/mdx/projectDetails
  const categories = fs.readdirSync(basePath);

  const results: ProjectDetailMeta[] = [];

  for (const category of categories) {
    // Obtener TODOS los archivos de la carpeta @/data/mdx/projectDetails
    const categoryPath = path.join(basePath, category);
    const rawFiles = fs.readdirSync(categoryPath);

    // Filtrar solo los archivos válidos.
    // Recordar que no tengo configurado el soporte a archivos markdown puros así que
    // los .md no son válidos.
    // Además más abajo se eliminan las extensiones mdx del nombre de forma explícita
    // así que mejor lo dejo solo filtrando mdx y listo.
    const files = rawFiles.filter((file) => file.endsWith(".mdx"));

    for (const file of files) {
      const fullPath = path.join(categoryPath, file);
      const fileContent = fs.readFileSync(fullPath, 'utf-8');

      const { data, content } = matter(fileContent);

      results.push({
        projectId: data.projectId,
        problemId: data.problemId,
        skillIds: data.skillIds,
        content,
        slug: `${category}/${file.replace('.mdx', '')}`,
      });
    }
  }

  return results;
}

