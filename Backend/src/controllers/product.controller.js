import { Product } from "../models/product.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import CustomError from "../utils/CustomError.js";
import fs from "fs/promises";
import { myCache } from "../app.js";


// revalidate on new, update, delete product and on NewOrder
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

  // Cache the newly created product
  myCache.set(`product-${product._id}`, JSON.stringify(product));

  return res.status(201).json({
    success: true,
    message: `Product created successfully🚀`,
    product,
  });
});

// revalidate on new, update, delete product and on NewOrder
export const getLatestProducts = asyncHandler(async (req, res) => {
  let products = [];

  if (myCache.has("latest-products")) {
    products = JSON.parse(myCache.get("latest-products").toString());
  } else {
    products = await Product.find({}).sort({ createdAt: -1 }).limit(5);

    if (!products) {
      throw new CustomError("Product not found", 400);
    }
    // Cache the result
    myCache.set("latest-products", JSON.stringify(products));
  }

  return res.status(200).json({
    status: true,
    message: "Latest products are available",
    products,
  });
});

// revalidate on new, update, delete product and on NewOrder
export const getAllCategories = asyncHandler(async (req, res) => {
  let categories;
  if (myCache.has("categories")) {
    categories = JSON.parse(myCache.get("latest-products").toString());
  } else {
    categories = await Product.distinct("category");

    // Cache the result
    myCache.set("latest-products", JSON.stringify(categories));
  }

  return res.status(200).json({
    status: true,
    message: "All categories are available",
    categories,
  });
});

// revalidate on new, update, delete product and on NewOrder
export const getAdminProducts = asyncHandler(async (req, res) => {
  let products;
  if (myCache.has("all-products")) {
    products = JSON.parse(myCache.get("all-products").toString());
  } else {
    products = await Product.find({});

    // cache the result
    myCache.set("all-products", JSON.stringify(products));
  }

  return res.status(200).json({
    status: true,
    message: "All categories are available",
    products,
  });
});

// single product
// revalidate on new, update, delete product and on NewOrder
export const getSingleProduct = asyncHandler(async (req, res) => { 
  let product;
  const id = req.params.id;

  if (myCache.has(`product-${id}`)) {
    product = JSON.parse(myCache.get(`product-${id}`).toString());
  } else {
    product = await Product.findById(id);

    if (!product) {
      throw new CustomError("Product not found", 400);
    }
    // Cache the result
    myCache.set(`product-${id}`, JSON.stringify(product));
  }

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

  if (name) product.name = name;
  if (price) product.price = price;
  if (stock) product.stock = stock;
  if (category) product.category = category.toLowerCase();

  await product.save();

  return res.status(200).json({
    success: true,
    message: `Product updated successfully🚀`,
    product,
  });
});

export const getAllProducts = asyncHandler(async (req, res) => {
  const { search, sort, category, price } = req.query;

  const page = Number(req.query.page) || 1;

  const limit = Number(process.env.PRODUCT_PER_PAGE) || 8;
  const skip = (page - 1) * limit;

  const baseQuery = {};

  if (search)
    baseQuery.name = {
      $regex: search,
      $options: "i",
    };

  if (price)
    baseQuery.price = {
      $lte: Number(price),
    };

  if (category) baseQuery.category = category;

  const [products, filteredProducts] = await Promise.all([
    Product.find(baseQuery)
      .sort(sort && { price: sort === "asc" ? 1 : -1 })
      .limit(limit)
      .skip(skip),

    Product.find(baseQuery),
  ]);

  const totalPage = Math.ceil(products.length / limit);

  return res.status(200).json({
    success: true,
    message: "All products retrieved successfully",
    products,
  });
});
