import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createPost,
  getPosts,
  darLike,
  quitarLike,
} from "../controllers/post.controllers.js";

const router = Router();

router.post("/create-post", authRequired, createPost);
router.get("/get-posts", authRequired, getPosts);

router.post("/dar-like/:postId", authRequired, darLike);
router.post("/quitar-like/:postId", authRequired, quitarLike);

export default router;
