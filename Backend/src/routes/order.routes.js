import express from "express";

import { allOrder, myOrder, newOrder } from "../controllers/order.controller.js";
import adminOnly from "../middlewares/authRole.middleware.js";

const app = express(); 

// route - /api/v1/order/new
app.post("/new", newOrder);

// route - /api/v1/order/my
app.get("/my", myOrder )

// route - /api/v1/order/all
app.get("/allOrders",allOrder )

export default app;
