import { Product } from "../models/product.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import CustomError from "../utils/CustomError.js";
import fs from "fs/promises";

export const newProduct = asyncHandler(async (req, res, next) => {
  const { name, price, stock, category } = req.body;
  const image = req.files?.image[0]?.path;

  if (!image) {
    throw new CustomError("Please provide image of product", 400);
  }

  if (!name || !price || !stock || !category) {
    // If any required field is missing
    try {
      //  delete the photo
      await fs.unlink(image);
    } catch (error) {
      // Log any potential errors while deleting the photo
      console.error("Error deleting photo:", error);
    }

    throw new CustomError("Please provide all fields", 400);
  }

  const product = await Product.create({
    name,
    image,
    price,
    stock,
    category: category.toLowerCase(),
  });

  return res.status(201).json({
    success: true,
    message: `Product created successfully🚀`,
    product,
  });
});

export const getLatestProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ createdAt: -1 }).limit(5);

  if (!products) {
    throw new CustomError("Product not found", 400);
  }
  return res.status(200).json({
    status: true,
    message: "Latest products are available",
    products,
  });
});

export const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Product.distinct("category");

  return res.status(200).json({
    status: true,
    message: "All categories are available",
    categories,
  });
});

export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  return res.status(200).json({
    success: true,
    message: "All products retrieved successfully",
    products,
  });
});

export const getAdminProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  return res.status(200).json({
    status: true,
    message: "All categories are available",
    products,
  });
});

// single product
export const getSingleProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  return res.status(200).json({
    status: true,
    message: "Product is available",
    product,
  });
});

export const deleteProduct = asyncHandler(async (req, res, next) => {
  const id = req.params.id;

  const product = await Product.findByIdAndDelete(id);

  if (!product) {
    throw new CustomError("No such product", 404);
  }

  fs.unlink(product.image, () => {
    console.error("Product photo deleted");
  });

  return res.status(200).json({
    success: true,
    message: `Product deleted successfully!`,
  });
});

export const updateProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name, price, stock, category } = req.body;
  const image = req.files?.image?.[0]?.path; // Use optional chaining to prevent errors

  const product = await Product.findById(id);

  if (!product) {
    throw new CustomError("Invalid product Id", 404);
  }

  if (image) {
    //  delete the photo
    fs.unlink(product.image, () => {
      console.error("Old photo deleted");
    });
    product.image = image; // Just assign the new image path directly
  }

  if(name) product.name = name;
  if(price) product.price= price;
  if(stock) product.stock = stock;
  if(category) product.category = category.toLowerCase();

  await product.save();

  return res.status(200).json({
    success: true,
    message: `Product updated successfully🚀`,
    product,
  });
});

