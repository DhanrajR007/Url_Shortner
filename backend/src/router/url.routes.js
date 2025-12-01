import express from "express";
import urlController from "../controllers/url.controller.js";
const router = express.Router();

router.post("/api/create", urlController.createUrl);

router.get("/:id", urlController.getUrl);

export default router;
