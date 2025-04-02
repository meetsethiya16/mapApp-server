import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        "https://darling-crumble-fe3659.netlify.app",
        "http://localhost:5173", // For local testing
      ];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

import userRouter from "./routes/user.router.js";
import cityRouter from "./routes/city.router.js";

app.use("/", userRouter);
app.use("/dashboard", cityRouter);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
