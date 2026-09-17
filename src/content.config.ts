import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    titleAr: z.string().optional(),
    role: z.string().optional(),
    roleAr: z.string().optional(),
    year: z.number().optional(),
    duration: z.string().optional(),
    teamSize: z.number().optional(),
    outcomeSummary: z.string(),
    outcomeSummaryAr: z.string().optional(),
    description: z.string().optional(),
    descriptionAr: z.string().optional(),
    overview: z.string().optional(),
    overviewAr: z.string().optional(),
    problem: z.string().optional(),
    problemAr: z.string().optional(),
    constraints: z.array(z.string()).default([]),
    approach: z.string().optional(),
    approachAr: z.string().optional(),
    contributions: z.array(z.string()).default([]),
    contributionsAr: z.array(z.string()).default([]),
    architecture: z.array(z.string()).default([]),
    architectureAr: z.array(z.string()).default([]),
    aiCapabilities: z.array(z.string()).default([]),
    aiCapabilitiesAr: z.array(z.string()).default([]),
    github: z.url().optional(),
    backendGithub: z.url().optional(),
    frontendGithub: z.url().optional(),
    techStack: z.array(z.string()),
    impact: z.object({
      metrics: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
      qualitative: z.string(),
    }).optional(),
    learnings: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    status: z.enum(['completed', 'ongoing', 'archived']).default('completed'),
    order: z.number().optional(),
  }),
});

const journeyCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/journey' }),
  schema: z.object({
    date: z.string(),
    period: z.string().optional(),
    periodAr: z.string().optional(),
    title: z.string(),
    titleAr: z.string().optional(),
    type: z.enum(['milestone', 'learning', 'transition', 'education']),
    description: z.string(),
    descriptionAr: z.string().optional(),
    skills: z.array(z.string()).optional(),
    skillsAr: z.array(z.string()).optional(),
    contributions: z.array(z.string()).default([]),
    contributionsAr: z.array(z.string()).default([]),
  }),
});

const usesCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/uses' }),
  schema: z.object({
    category: z.enum(['backend', 'database', 'security', 'architecture', 'dev-tools', 'frontend', 'ai']),
    items: z.array(z.object({
      name: z.string(),
      nameAr: z.string().optional(),
      description: z.string(),
      descriptionAr: z.string().optional(),
      url: z.url().optional(),
    })),
    order: z.number(),
  }),
});

export const collections = {
  projects: projectsCollection,
  journey: journeyCollection,
  uses: usesCollection,
};
