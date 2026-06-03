import { Router } from 'express';

import { isAuth, optionalAuth } from '@/middleware/auth.middleware.ts';
import { validate } from '@/middleware/validate.middleware.ts';

import postCtrl from './post.controller.ts';
import {
    createPostSchema,
    listPostsSchema,
    postIdSchema,
    updatePostSchema,
} from './post.schema.ts';

const router = Router();

router.get('/', validate({ query: listPostsSchema }), optionalAuth, postCtrl.list);
router.get('/:id', validate({ params: postIdSchema }), optionalAuth, postCtrl.getOne);
router.post('/', isAuth, validate({ body: createPostSchema }), postCtrl.create);
router.patch(
    '/:id',
    isAuth,
    validate({ params: postIdSchema, body: updatePostSchema }),
    postCtrl.update
);
router.delete('/:id', isAuth, validate({ params: postIdSchema }), postCtrl.remove);

export default router;
