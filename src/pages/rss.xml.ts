import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import blogData from '../data/blog.json';

export async function GET(context: APIContext) {
  return rss({
    title: 'Soale Astra Studio — Insights & Research',
    description: 'Field notes, design principles, and technical strategies for AI startups and digital product teams.',
    site: context.site || 'https://soale-astra.pages.dev',
    items: blogData.map((post) => ({
      title: post.title,
      pubDate: new Date(post.isoDate),
      description: post.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
