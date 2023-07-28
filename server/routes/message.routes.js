import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js';
import { createPost, getMessages } from "../controllers/message.controllers.js"

const router = Router();

router.post('/create-post', authRequired, createPost)
router.get('/get-messages', authRequired, getMessages)

export default router;