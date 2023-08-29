import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getUserProfile,
  createTestProfile,
  updateProfile,
  getProfile,
} from "../controllers/profile.controllers.js";

const router = Router();

router.get("/profile/:username", authRequired, getUserProfile);
router.put("/update-profile", authRequired, updateProfile);
router.get("/get-profile/:username", authRequired, getProfile);

router.post("/create-test-profile", authRequired, createTestProfile);

export default router;
