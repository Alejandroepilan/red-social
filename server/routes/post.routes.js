import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createPost,
  getPosts,
  darLike,
  quitarLike,
  getLikes,
} from "../controllers/post.controllers.js";

const router = Router();

router.post("/create-post", authRequired, createPost);
router.get("/get-posts/:userId", authRequired, getPosts);

router.patch("/dar-like/:postId", authRequired, darLike);
router.patch("/quitar-like/:postId", authRequired, quitarLike);
router.get("/get-likes/:postId", authRequired, getLikes);

export default router;
