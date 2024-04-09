import mongoose, { Schema } from "mongoose";

const couponSchema = new Schema(
  {
    coupon: {
      type: String,
      required: [true, "Please enter a coupon code"],
      unique: true,
    },
    amount: {
      type: Number,
      required: [true, "Please enter discount amount"],
    },
  },
  { timestamps: true }
);

export const Coupon = mongoose.model("Coupon", couponSchema);
