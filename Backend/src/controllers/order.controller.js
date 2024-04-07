import { Order } from "../models/order.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import CustomError from "../utils/CustomError.js";
import { Product } from "../models/product.model.js";
import { myCache } from "../app.js";

const reduceStock = async (orderItems) => {
  for (let i = 0; i < orderItems.length; i++) {
    const orderItem = orderItems[i];
    const product = await Product.findById(orderItem.productId);
    if (!product) {
      throw new CustomError("Product not found");
    }
    // Assuming there's a property 'quantity' in orderItems
    product.stock -= orderItem.quantity;
    await product.save();
  }
};

export const newOrder = asyncHandler(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    user,
    subtotal,
    tax,
    shippingCharges,
    discount,
    total,
  } = req.body;

  // Check if all required fields exist in the request body
  if (!shippingInfo || !orderItems || !user || !subtotal || !tax || !total) {
    throw new CustomError(
      "Required fields are missing in the request body",
      400
    );
  }

  // if already exist
  const existingOrder = await Order.findOne({
    shippingInfo,
    subtotal,
    tax,
    total,
    user, // You might need to adjust this based on your schema
  });

  if (existingOrder) {
    throw new CustomError("An order with the same details already exists", 400);
  }

  // Create the order
  const order = await Order.create({
    shippingInfo,
    orderItems,
    user,
    subtotal,
    tax,
    shippingCharges,
    discount,
    total,
  });

  // Reduce stock for order items
  await reduceStock(order.orderItems);

  //cache the order
  myCache.set(`order_${order._id}`, order);

  // Send success response
  return res.status(201).json({
    status: true,
    message: "Order created successfully",
  });
});

export const myOrder = asyncHandler(async (req, res, next) => {
  const { id: user } = req.query;
  const key = `my-orders-${user}`;

  let orders = [];

  if (myCache.has(key)) {
    orders = JSON.parse(myCache.get(key).toString());
  } else {
    orders = await Product.find({ user });

    // cache the result
    myCache.set(key, JSON.stringify(orders));
  }

  // Send success response
  return res.status(200).json({
    status: true,
    message: "Your Orders are🚀 ",
    orders,
  });
});

export const allOrder = asyncHandler(async (req, res, next) => {
    const { id: user } = req.query;
  
    const key = user ? `all-orders-${user}` : 'all-orders';
    let orders = [];
  
    if (myCache.has(key)) {
      orders = JSON.parse(myCache.get(key).toString());
    } else {

        orders = await Order.find();
  
      // Cache the result
      myCache.set(key, JSON.stringify(orders));
    }
  
    // Send success response
    return res.status(200).json({
      status: true,
      message: "All Orders are🚀 ",
      orders,
    });
  });
  