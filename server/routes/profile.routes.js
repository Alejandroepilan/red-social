import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js';
import { getUserProfile } from '../controllers/profile.controllers.js';

const router = Router()

router.get('/profile/:username', authRequired, getUserProfile)

export default router;