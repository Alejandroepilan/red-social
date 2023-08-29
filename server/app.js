import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import postRoutes from "./routes/post.routes.js";
import profileRoutes from "./routes/profile.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/public", express.static("public"));

app.use("/api", authRoutes, postRoutes, profileRoutes);

export default app;
