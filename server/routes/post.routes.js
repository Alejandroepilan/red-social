import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js';
import { createPost, getPosts } from "../controllers/post.controllers.js"

const router = Router();

router.post('/create-post', authRequired, createPost)
router.get('/get-posts', authRequired, getPosts)

export default router;