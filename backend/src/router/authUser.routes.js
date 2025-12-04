import express from "express";
import authcontroller from "../controllers/auth.controller.js";
import middleware from "../middleware/auth.middleware.js"
const router = express.Router();

router.post("/login", authcontroller.login_user);
router.post("/register", authcontroller.registeruser);
router.get("/me",middleware.varifyUser, authcontroller.getcurrentuser);

export default router;
