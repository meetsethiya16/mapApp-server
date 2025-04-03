import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: [
    "http://localhost:3001",
    "https://darling-crumble-fe3659.netlify.app/",
  ], // Add allowed origins
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  credentials: true, // Allow cookies/auth headers
};

app.use(cors(corsOptions));

import userRouter from "./routes/user.router.js";
import cityRouter from "./routes/city.router.js";

app.use("/", userRouter);
app.use("/dashboard", cityRouter);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
