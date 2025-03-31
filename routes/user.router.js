import express from "express";

const router = express.Router();

import * as userController from "../controller/user.controller.js";

router.post("/save", userController.save);
router.post("/login", userController.login);
router.get("/user", userController.getUser);

export default router;
