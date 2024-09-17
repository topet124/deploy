import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const updateUser = async (req, res) => {
  const obj = { ...req.body };
  delete obj.password;
  delete obj.confirmPassword;
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, obj);
  res.status(StatusCodes.OK).json({ msg: "user updated" });
};
