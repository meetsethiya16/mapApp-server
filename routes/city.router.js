import express from "express";

const router = express.Router();

import * as cityController from "../controller/city.controller.js";

router.post("/save", cityController.save);

export default router;
