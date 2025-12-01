import express from "express";
import authcontroller from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/login", authcontroller.login_user);
router.post("/register", authcontroller.registeruser);

export default router;
