import express, { RequestHandler } from "express";
import protectRoute from "../middleware/protectRoute.js";
import {
  getMessages,
  getUsersForSidebar,
  sendMessage,
} from "../controllers/message.controller.js";

const router = express.Router();

router.get(
  "/conversations",
  protectRoute as RequestHandler,
  getUsersForSidebar
);
router.get(
  "/:id",
  protectRoute as RequestHandler,
  getMessages as RequestHandler
);
router.post("/send/:id", protectRoute as RequestHandler, sendMessage);

export default router;
