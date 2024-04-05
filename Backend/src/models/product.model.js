import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter Username"],
      maxLength: [20, "Name should not exceed 20 characters"],
      trim: true,
      index: true,
    },
    image: {
      type: String,
      required: [true, "Please provide Image"],
    },
    price: {
      type: Number,
      required: [true, "Please provide Price"],
    },
    stock: {
      type: Number,
      required: [true, "Please provide Stock"],
    },
    category: {
      type: String,
      required: [true, "Please provide Category"],
      trim: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
