import { MetadataRoute } from 'next';
import { client } from '@/lib/sanity';
import { projectsQuery } from '@/lib/queries';
import { Project } from '@/types';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://devsphere.io';
  
  const projects: Project[] = await client.fetch(projectsQuery);
  
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug.current}`,
    lastModified: new Date(project.publishedAt),
  }));

  const staticUrls = [
    '',
    '/projects',
    '/experience',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  return [...staticUrls, ...projectUrls];
}
