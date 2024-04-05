import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.controller.js";
import adminOnly from "../middlewares/authRole.middleware.js";

const app = express();

// route - /api/v1/user/new
app.post("/new", createUser);

// route - /api/v1/user/all
app.get("/all", adminOnly, getAllUsers);

// using middleware in getAll, delete

//route - /api/v1/user/dynamic:id
app.get("/:id", getUser);

app.delete("/:id", adminOnly, deleteUser);

app.put("/:id", updateUser);

// we can also perform chaining because routes are same, common then we can do

// app.get('/:id').get(getUser).delete(deleteUser)

export default app;
