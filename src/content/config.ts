import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        techStack: z.array(z.string()),
        featured: z.boolean().default(false),
        thumbnail: z.string().optional(),
        featuredImage: z.string().optional(),
        gallery: z.array(z.string()).optional(),
        lang: z.enum(['id', 'en']),
        projectUrl: z.string().optional(),
        githubUrl: z.string().optional(),
    }),
});

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        author: z.string().default('Hermansyah'),
        coverImage: z.string().optional(),
        tags: z.array(z.string()).default([]),
        lang: z.enum(['id', 'en']).default('id'),
    }),
});

export const collections = {
    projects: projectsCollection,
    blog: blogCollection,
};
