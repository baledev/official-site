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
        lang: z.enum(['id', 'en']),
        projectUrl: z.string().optional(),
        githubUrl: z.string().optional(),
    }),
});

export const collections = {
    projects: projectsCollection,
};
