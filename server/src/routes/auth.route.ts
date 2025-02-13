import express, { RequestHandler } from "express";
import {
  getMe,
  login,
  logout,
  signup,
} from "../controllers/auth.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/me", protectRoute as RequestHandler, getMe as RequestHandler);
router.post("/signup", signup as RequestHandler);
router.post("/login", login as RequestHandler);
router.post("/logout", logout as RequestHandler);

export default router;
