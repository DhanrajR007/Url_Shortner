import dotenv from "dotenv";
dotenv.config();
import url_schema from "./src/models/shortUrl.model.js";
import express from "express";
import connectDB from "./src/config/mongo.config.js";
import router from "./src/router/url.routes.js";

const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.listen(3000, () => {
  console.log("server is running on port no. 3000");
});
