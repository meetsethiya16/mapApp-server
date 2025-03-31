import "../models/connection.js";
import jwt from "jsonwebtoken";
import rs from "randomstring";
import userSchemaModel from "../models/user.model.js";

export const save = async (req, res) => {
  const userList = await userSchemaModel.find();
  const _id = userList.length === 0 ? 1 : userList[userList.length - 1]._id + 1;
  const userDetail = {
    ...req.body,
    _id: _id,
    auth: "isAuthenticated",
    info: Date(),
  };
  try {
    await userSchemaModel.create(userDetail);
    res.status(200).json({ status: true });
  } catch (error) {
    res.status(500).json({ status: false });
  }
};

export const login = async (req, res) => {
  const conditionObj = { ...req.body };
  const userList = await userSchemaModel.find(conditionObj);
  if (userList.length !== 0) {
    const payload = { subject: userList[0].username };
    const key = rs.generate();
    const token = jwt.sign(payload, key);
    res.status(200).json({ token: token, users: userList[0] });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
};
