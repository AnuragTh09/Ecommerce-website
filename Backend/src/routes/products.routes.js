import express from "express";
import {
  deleteProduct,
  getAdminProducts,
  getAllCategories,
  getLatestProducts,
  newProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct
} from "../controllers/product.controller.js";
import { singleImageUpload } from "../middlewares/multer.middleware.js";
import adminOnly from "../middlewares/authRole.middleware.js";

const app = express();

// Route to create a new product: /api/v1/product/new
app.post("/new", singleImageUpload, newProduct);

// Route to get the latest products: /api/v1/product/latest
app.get("/latest", getLatestProducts);

// Route to get all categories: /api/v1/product/categories
app.get("/categories", getAllCategories);

// Route to get all products: /api/v1/product/all
app.get('/all', getAllProducts);

// Route to get admin products: /api/v1/product/admin-products
app.get("/admin-products", adminOnly, getAdminProducts);

// Route to delete a product by ID: /api/v1/product/:id
app.delete("/:id",adminOnly, deleteProduct);

// Route to update a product by ID: /api/v1/product/:id

app.route('/:id').get(getSingleProduct).put(adminOnly, singleImageUpload, updateProduct)

export default app;
