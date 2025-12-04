import express from "express";
import middleware from "../middleware/auth.middleware.js";
import { getAllUrls } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", middleware.varifyUser, getAllUrls);

export default router;
