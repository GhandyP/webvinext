import { loadBlogPosts, loadProjects } from "../lib/content";
import { buildCanonicalUrl } from "../lib/seo";

function toDate(value: string): Date {
  return new Date(value);
}

export default function sitemap() {
  const posts = loadBlogPosts();
  const projects = loadProjects();
  const datedEntries = [
    ...posts.map((post) => post.updatedDate ?? post.date),
    ...projects.map((project) => project.date),
  ];

  const latestContentDate = datedEntries.length > 0
    ? toDate(datedEntries.reduce((latest, current) => current > latest ? current : latest))
    : undefined;

  return [
    {
      url: buildCanonicalUrl("/"),
      ...(latestContentDate ? { lastModified: latestContentDate } : {}),
    },
    {
      url: buildCanonicalUrl("/about"),
    },
    {
      url: buildCanonicalUrl("/blog"),
      ...(posts[0] ? { lastModified: toDate(posts[0].updatedDate ?? posts[0].date) } : {}),
    },
    ...posts.map((post) => ({
      url: buildCanonicalUrl(`/blog/${post.slug}`),
      lastModified: toDate(post.updatedDate ?? post.date),
    })),
    {
      url: buildCanonicalUrl("/projects"),
      ...(projects[0] ? { lastModified: toDate(projects[0].date) } : {}),
    },
    ...projects.map((project) => ({
      url: buildCanonicalUrl(`/projects/${project.slug}`),
      lastModified: toDate(project.date),
    })),
  ];
}
