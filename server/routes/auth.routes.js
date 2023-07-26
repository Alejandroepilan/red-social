import { Router } from "express";
import { login, register, logout, profile, verifyToken } from '../controllers/auth.controllers.js';
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { registerSchema, loginSchema } from '../schemas/auth.schema.js';

const router = Router();

router.post('/register', validateSchema(registerSchema), register);
router.post('/login', validateSchema(loginSchema), login);
router.get('/verify-token', verifyToken);
router.get('/profile', authRequired, profile);
router.post('/logout', logout);

export default router;