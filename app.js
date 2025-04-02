import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure CORS
const allowedOrigins = [
  "https://darling-crumble-fe3659.netlify.app",
  "http://localhost:5173", // For local testing
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allow all required methods
    allowedHeaders: ["Content-Type", "Authorization"], // Ensure proper headers
  })
);

// **Manually handle preflight requests**
app.options("*", (req, res) => {
  res.header(
    "Access-Control-Allow-Origin",
    allowedOrigins.includes(req.headers.origin) ? req.headers.origin : ""
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  res.sendStatus(200);
});

// Import Routes
import userRouter from "./routes/user.router.js";
import cityRouter from "./routes/city.router.js";

app.use("/", userRouter);
app.use("/dashboard", cityRouter);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
