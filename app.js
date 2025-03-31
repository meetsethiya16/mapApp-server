import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const PORT = 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

import userRouter from "./routes/user.router.js";

app.use("/", userRouter);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server invoked at http://localhost:${PORT}`);
});
