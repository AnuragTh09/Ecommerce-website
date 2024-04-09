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

export const myOrder = asyncHandler(async (req, res, next) => {
  const { id: user } = req.query;
  const key = `my-orders-${user}`;

  let orders = [];

  if (myCache.has(key)) {
    orders = JSON.parse(myCache.get(key).toString());
  } else {
    orders = await Order.find({ user });

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
  try {
    // Fetch all orders from the database
    const orders = await Order.find().populate("user", "name");

    // Log the orders retrieved from the database
    console.log("Orders:", orders);

    // Send success response with orders
    return res.status(200).json({
      status: true,
      message: "All Orders are🚀 ",
      orders,
    });
  } catch (error) {
    // Handle any errors
    console.error("Error fetching orders:", error);
    return res.status(500).json({
      status: false,
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
});

export const getSingleOrder = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const key = `order-${id}`;

  let order;

  if (myCache.has(key)) {
    order = JSON.parse(myCache.get(key).toString());
  } else {
    order = await Order.findById(id).populate("user", "name");
    // Cache the result
    myCache.set(key, JSON.stringify(order));
  }

  // Check if order is empty or null
  if (!order) {
    throw new CustomError("Order not found", 404);
  }

  // Send success response
  return res.status(200).json({
    status: true,
    message: "Your Order is🚀 ",
    order,
  });
});


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
    user,
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

// export const processOrder = asyncHandler(async (req, res, next) => {
//   const { id } = req.params;

//   // Find the order by ID
//   const order = await Order.findById(id);

//   if (!order) {
//     throw new CustomError("Order not found", 404);
//   }

//   if (order.status === "Processing") {
//     order.status = "Shipped";
//   } else if (order.status === "Shipped") {
//     order.status = "Delivered";
//   }

//   // Save the updated order
//   await order.save();

//   // Send success response
//   return res.status(200).json({
//     status: true,
//     message: "Order Processed Successfully",
//     order,
//   });
// });

export const processOrder = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  // Find the order by ID
  const order = await Order.findById(id);

  if (!order) {
    throw new CustomError("Order not found", 404);
  }

  // Define product update function
  const updateProductStatus = async (productId, newStatus) => {
    const product = await Product.findById(productId);
    if (!product) {
      throw new CustomError("Product not found", 404);
    }
    // Update product status or any other properties
    // Example: product.status = newStatus;
    // Save the product
    // await product.save();
  };

  if (order.status === "Processing") {
    // Update product status for all order items
    for (let i = 0; i < order.orderItems.length; i++) {
      await updateProductStatus(order.orderItems[i].productId, "Shipped");
    }
    order.status = "Shipped";
  } else if (order.status === "Shipped") {
    // Update product status for all order items
    for (let i = 0; i < order.orderItems.length; i++) {
      await updateProductStatus(order.orderItems[i].productId, "Delivered");
    }
    order.status = "Delivered";
  }

  // Save the updated order
  await order.save();

  // Send success response
  return res.status(200).json({
    status: true,
    message: "Order Processed Successfully",
    order,
  });
});

export const deleteOrder = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  // Find the order by ID
  const order = await Order.findById(id);

  if (!order) {
    throw new CustomError("Order not found", 404);
  }

  // Delete the order
  await Order.deleteOne({ _id: id });

  // Send success response
  return res.status(200).json({
    status: true,
    message: "Order Deleted Successfully",
  });
});
