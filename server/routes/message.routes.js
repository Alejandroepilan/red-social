import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js';
import { postMessage, getMessages } from "../controllers/message.controllers.js"

const router = Router();

router.post('/post-message', authRequired, postMessage)
router.get('/get-messages', authRequired, getMessages)

export default router;