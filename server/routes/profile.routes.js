import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getUserProfile,
  createTestProfile,
  updateProfile,
  checkUsername,
  getBadges,
} from "../controllers/profile.controllers.js";

const router = Router();

router.get("/profile/:username", authRequired, getUserProfile);
router.put("/update-profile", authRequired, updateProfile);
router.get("/check-username/:username", authRequired, checkUsername);
router.get("/get-badges/:username", authRequired, getBadges);

router.post("/create-test-profile", authRequired, createTestProfile);

export default router;
