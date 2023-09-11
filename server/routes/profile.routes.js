import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getUserProfile,
  createTestProfile,
  updateProfile,
  checkUsername,
  followUser,
  unfollowUser,
} from "../controllers/profile.controllers.js";

const router = Router();

router.get("/profile/get/:username", authRequired, getUserProfile);
router.put("/profile/update/:username", authRequired, updateProfile);
router.get("/profile/check-username/:username", authRequired, checkUsername);

router.put("/follow/:userid", authRequired, followUser);
router.put("/unfollow/:userid", authRequired, unfollowUser);

router.post("/create-test-profile", authRequired, createTestProfile);

export default router;
