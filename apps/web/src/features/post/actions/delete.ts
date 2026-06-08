'use server';

import { revalidateTag } from 'next/cache';

import { apiServer } from '@/utils/api/api-server';
import { postSingleResponseSchema } from '@/models/post.schema';

export type DeletePostState = {
    success: boolean;
    error?: string;
};

export async function deletePostAction(id: string): Promise<DeletePostState> {
    try {
        await apiServer(`/posts/${id}`, postSingleResponseSchema, { method: 'DELETE' }, true);
        revalidateTag('posts');
        revalidateTag(`post-${id}`);
        return { success: true };
    } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to delete post';
        return { success: false, error: message };
    }
}
