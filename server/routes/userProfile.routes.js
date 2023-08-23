import { Router } from "express";
import {
  createTestProfile,
  updateProfile,
} from "../controllers/userProfile.controllers.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.post("/create-test-profile", authRequired, createTestProfile);
router.put("/update-profile", authRequired, updateProfile);

export default router;
