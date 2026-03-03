import { MetadataRoute } from 'next';
import { MOCK_PROJECTS } from '@/lib/mock-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devsphere.io';
  
  const projectUrls = MOCK_PROJECTS.map((project) => ({
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
