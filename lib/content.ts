import fs from 'node:fs/promises'
import path from 'node:path'

type MarkdownRecord = Record<string, unknown>

export type BlogPost = {
  slug: string
  path: string
  title: string
  description: string
  pubDate: string
  tags?: string[]
  content: string
}

export type Project = {
  slug: string
  path: string
  title: string
  description: string
  summary: string
  order: number
  featured: boolean
  stack: string[]
  role: string
  problem: string
  outcome: string
  status: string
  demoUrl?: string
  repoUrl?: string
  content: string
}

/**
 * Minimal YAML frontmatter parser.
 * Handles string, number, boolean, and simple arrays (one item per line with "- ").
 */
function parseFrontmatter(raw: string): { data: MarkdownRecord; body: string } {
  const data: MarkdownRecord = {}
  const lines = raw.split('\n')

  if (lines[0]?.trim() !== '---') {
    return { data, body: raw.trim() }
  }

  let i = 1
  let currentKey = ''
  let currentValues: string[] = []
  let inArray = false

  const flush = () => {
    if (!currentKey) return
    if (inArray) {
      data[currentKey] = currentValues
    } else {
      const val = currentValues.join(' ').trim()
      if (val === 'true') data[currentKey] = true
      else if (val === 'false') data[currentKey] = false
      else if (/^-?\d+(\.\d+)?$/.test(val)) data[currentKey] = Number(val)
      else data[currentKey] = val.replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1')
    }
    currentKey = ''
    currentValues = []
    inArray = false
  }

  while (i < lines.length) {
    const line = lines[i]
    if (line.trim() === '---') {
      flush()
      break
    }

    const arrayMatch = line.match(/^(\s*)-\s+(.+)$/)
    if (inArray && arrayMatch) {
      currentValues.push(arrayMatch[2].trim())
      i++
      continue
    }

    const kvMatch = line.match(/^(\w+)\s*:\s*(.*)$/)
    if (kvMatch) {
      flush()
      currentKey = kvMatch[1]
      const value = kvMatch[2].trim()
      if (value === '') {
        inArray = true
        currentValues = []
      } else {
        currentValues = [value]
      }
    }
    i++
  }

  const body = lines.slice(i + 1).join('\n').trim()
  return { data, body }
}

const rootDir = process.cwd()

async function readMarkdownFiles(directory: string) {
  const absoluteDir = path.join(rootDir, directory)
  const entries = await fs.readdir(absoluteDir)

  return Promise.all(
    entries
      .filter((entry) => entry.endsWith('.md'))
      .map(async (entry) => {
        const fullPath = path.join(absoluteDir, entry)
        const raw = await fs.readFile(fullPath, 'utf8')
        const parsed = parseFrontmatter(raw)
        const slug = entry.replace(/\.md$/, '')
        return {
          slug,
          data: parsed.data,
          content: parsed.body,
        }
      }),
  )
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const posts = await readMarkdownFiles('content/blog')

  return posts
    .map(({ slug, data, content }) => ({
      slug,
      path: `/blog/${slug}`,
      title: String(data.title ?? ''),
      description: String(data.description ?? ''),
      pubDate: String(data.pubDate ?? ''),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
      content,
    }))
    .sort((a, b) => b.pubDate.localeCompare(a.pubDate))
}

export async function getBlogPostBySlug(slug: string) {
  const posts = await getAllBlogPosts()
  return posts.find((post) => post.slug === slug) ?? null
}

export async function getAllProjects(): Promise<Project[]> {
  const projects = await readMarkdownFiles('content/projects')

  return projects
    .map(({ slug, data, content }) => ({
      slug,
      path: `/projects/${slug}`,
      title: String(data.title ?? ''),
      description: String(data.description ?? ''),
      summary: String(data.summary ?? ''),
      order: Number(data.order ?? 0),
      featured: Boolean(data.featured),
      stack: Array.isArray(data.stack) ? data.stack.map(String) : [],
      role: String(data.role ?? ''),
      problem: String(data.problem ?? ''),
      outcome: String(data.outcome ?? ''),
      status: String(data.status ?? ''),
      demoUrl: data.demoUrl ? String(data.demoUrl) : undefined,
      repoUrl: data.repoUrl ? String(data.repoUrl) : undefined,
      content,
    }))
    .sort((a, b) => a.order - b.order)
}

export async function getProjectBySlug(slug: string) {
  const projects = await getAllProjects()
  return projects.find((project) => project.slug === slug) ?? null
}
