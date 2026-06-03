import { z } from 'zod';

import { paginationSchema } from '@/schemas/pagination.schema.ts';

export const createPostSchema = z.object({
    title: z.string().min(1).max(255),
    body: z.string().min(1),
    published: z.boolean().optional().default(false),
});

export const updatePostSchema = z.object({
    title: z.string().min(1).max(255).optional(),
    body: z.string().min(1).optional(),
    published: z.boolean().optional(),
});

export const postIdSchema = z.object({
    id: z.string().cuid(),
});

export const listPostsSchema = paginationSchema.extend({
    published: z
        .enum(['true', 'false'])
        .transform((v) => v === 'true')
        .optional(),
});

export type CreatePostInput = z.infer<typeof createPostSchema>;
export type UpdatePostInput = z.infer<typeof updatePostSchema>;
export type ListPostsQuery = z.infer<typeof listPostsSchema>;
