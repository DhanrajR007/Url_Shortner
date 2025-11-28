import express from "express";
import urlController from "../controllers/url.controller.js";
import url_schema from "../models/shortUrl.model.js";
const router = express.Router();

router.post("/api/create", urlController.createUrl);

router.get("/:id", urlController.getUrl);

export default router;
