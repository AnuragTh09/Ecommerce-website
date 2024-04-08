import express from "express";

import {
  allOrder,
  deleteOrder,
  getSingleOrder,
  myOrder,
  newOrder,
  processOrder,
} from "../controllers/order.controller.js";
import adminOnly from "../middlewares/authRole.middleware.js";

const app = express();

// route - /api/v1/order/new
app.post("/new", newOrder);

// route - /api/v1/order/my
app.get("/my", myOrder);

// route - /api/v1/order/all
app.get("/allOrders", adminOnly, allOrder);

app
.route("/:id")
.get(getSingleOrder)
.put(adminOnly, processOrder)
.delete(adminOnly, deleteOrder)

export default app;
