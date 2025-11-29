import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./src/config/mongo.config.js";
import router from "./src/router/url.routes.js";
import { errorHandler } from "./src/utils/errorHandler.js";

const app = express();

connectDB();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("server is running on port no. 3000");
});
