import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./src/config/mongo.config.js";
import urlrouter from "./src/router/url.routes.js";
import authrouter from "./src/router/authUser.routes.js";
import userrouter from "./src/router/user.route.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { attachUser } from "./src/utils/attachingUser.js";

const app = express();

connectDB();

//Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // your React app
    credentials: true, // 👈 this allows cookies to be sent
  })
);

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(attachUser);

app.use("/", urlrouter);
app.use("/api/auth", authrouter);
app.use("/api/allurls", userrouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("server is running on port no. 3000");
});
