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
  "src/data/mdx/projectDetails"
);

export function getAllProjectDetails(): ProjectDetailMeta[] {
  const categories = fs.readdirSync(basePath);

  const results: ProjectDetailMeta[] = [];

  for (const category of categories) {
    const categoryPath = path.join(basePath, category);
    const files = fs.readdirSync(categoryPath);

    for (const file of files) {
      const fullPath = path.join(categoryPath, file);
      const fileContent = fs.readFileSync(fullPath, "utf-8");

      const { data, content } = matter(fileContent);

      results.push({
        projectId: data.projectId,
        problemId: data.problemId,
        skillIds: data.skillIds,
        content,
        slug: `${category}/${file.replace(".mdx", "")}`,
      });
    }
  }

  return results;
}

