import { User } from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import CustomError from "../utils/CustomError.js";

export const createUser = asyncHandler(async (req, res, next) => {
  const { username, password, email, _id } = req.body;

  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser) {
    return res.status(401).json({
      success: false,
      message: `Welcome back, ${username}`,
    });
  }

  if (!username || !password || !email || !_id) {
    throw new CustomError("Please enter all fields", 400);
  }

  const user = await User.create({
    email,
    password,
    _id,
    username: username.toLowerCase(),
  });

  return res.status(201).json({
    success: true,
    message: `Welcome, ${username}`,
    user,
  });
});

export const getAllUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find({});

  return res.status(200).json({
    success: true,
    message: "All users created successfully",
    users,
  });
});

export const getUser = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findById(id);

  if (!user) {
    throw new CustomError("No such user, Invalid id, check your id", 400);
  }

  return res.status(200).json({
    success: true,
    message: `${user._id} founded successfully!`,
    user,
  });
});

export const deleteUser = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findByIdAndDelete(id);

  if (!user) {
    throw new CustomError("No such user ", 400);
  }

  return res.status(200).json({
    success: true,
    message: `${user._id} deleted successfully!`,
    user,
  });
});

export const updateUser = asyncHandler(async (req, res, next) => {
  // When you use findByIdAndUpdate, by default, it returns the original document before the update. If you want to return the updated document, you need to set the new option to true as the third parameter

  const id = req.params.id;
  const user = await User.findByIdAndUpdate(id, req.body, { new: true });

  if (!user) {
    throw new CustomError("No such user ", 400);
  }

  return res.status(200).json({
    success: true,
    message: `${user._id} updated successfully!`,
    user,
  });
});

export default createUser;
