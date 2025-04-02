import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// Import Routes
import userRouter from "./routes/user.router.js";
import cityRouter from "./routes/city.router.js";

app.use("/", userRouter);
app.use("/dashboard", cityRouter);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
