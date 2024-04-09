import express from 'express';
import { allCoupons, applyDiscount, createPayment, deleteCoupon, newCoupon } from '../controllers/payment.controller.js';
import adminOnly from '../middlewares/authRole.middleware.js';


const app = express();

//stripe payment integration 
//route - /api/v1/payment/create
app.post("/create", createPayment)

//route - /api/v1/payment/coupon/discount
app.get("/coupon/discount", applyDiscount)

//route - /api/v1/payment/coupon/new
app.post("/coupon/new", adminOnly, newCoupon)

//route - /api/v1/payment/coupon/all
app.get("/coupon/all",adminOnly,  allCoupons)

//route - /api/v1/payment/coupon/:id
app.delete("/coupon/:id", adminOnly, deleteCoupon)

export default app;
