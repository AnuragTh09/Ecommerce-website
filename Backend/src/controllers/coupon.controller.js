import { Coupon } from "../models/coupon.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import CustomError from "../utils/CustomError.js";

export const newCoupon = asyncHandler(async (req, res, next) => {
  const { coupon, amount } = req.body;
  if (!coupon || !amount) {
    return new CustomError("Enter amount and coupon ", 400);
  }

  const couponCode = await Coupon.create({
    coupon,
    amount,
  });
  if (!couponCode) {
    throw new CustomError("Failed to create coupon", 400);
  }

  res.status(201).json({
    success: true,
    message: "Coupon created successfully",
    coupon: couponCode,
  });
});

export const applyDiscount = asyncHandler(async (req, res, next) => {
  const { coupon } = req.query;

  const discount = await Coupon.findOne({ code: coupon });

  if (!discount) {
    throw new CustomError("Invalid coupon code", 400);
  }

  return res.status(200).json({
    success: true,
    coupon: discount.amount,
  });
});

export const allCoupons = asyncHandler(async (req, res, next) => {
  const coupons = await Coupon.find({});

  if (!coupons) {
    throw new CustomError("No coupon code", 400);
  }

  return res.status(200).json({
    success: true,
    coupons,
  });
});

export const deleteCoupon = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const coupon = await Coupon.findByIdAndDelete(id);

  if (!coupon) {
    throw new CustomError("Invalid ID", 400);
  }

  return res.status(200).json({
    success: true,
    message: "Coupon deleted successfully",
    coupon,
  });
});
