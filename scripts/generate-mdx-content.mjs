import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { compile } from "@mdx-js/mdx";
import matter from "gray-matter";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentRoot = path.join(repoRoot, "content");
const outputRoot = path.join(repoRoot, ".generated", "content");

async function collectMdxFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectMdxFiles(fullPath)));
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      files.push(fullPath);
    }
  }

  return files;
}

async function writeCompiledModule(sourceFile) {
  const relativePath = path.relative(contentRoot, sourceFile);
  const outputPath = path.join(outputRoot, relativePath).replace(/\.mdx$/, ".mjs");
  const raw = await readFile(sourceFile, "utf8");
  const { data, content } = matter(raw);
  const compiled = await compile(content, {
    jsx: false,
    outputFormat: "program",
  });

  await mkdir(path.dirname(outputPath), { recursive: true });
  
  const finalCode = String(compiled) +
    `\nexport const frontmatter = ${JSON.stringify(data)};\n` +
    `export const rawContent = ${JSON.stringify(content)};\n`;

  await writeFile(outputPath, finalCode, "utf8");
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

const mdxFiles = await collectMdxFiles(contentRoot);
await Promise.all(mdxFiles.map(writeCompiledModule));
