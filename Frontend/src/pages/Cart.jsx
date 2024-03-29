import React, { useEffect, useState } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Carousel from "../components/Carousel";
import { GrValidate } from "react-icons/gr";
import { VscError } from "react-icons/vsc";

const subtotal = 4999;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 49;
const discount = 649;
const total = subtotal + tax + shippingCharges - discount;

const Cart = () => {
  // coupon
  const [couponCode, setCouponCode] = useState("");
  const [isValidCouponCode, setIsValidCouponCode] = useState(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      <main>


      </main>

      <aside className="">
        <p className="flex items-center gap-2">Subtotal: ₹{subtotal} </p>
        <p className="flex items-center gap-2">
          ShippingCharges: ₹{shippingCharges}{" "}
        </p>
        <p className="flex items-center gap-2">Tax: ₹{tax} </p>
        <p className="flex items-center gap-2">
          Discount: <em className="flex items-center">- ₹{discount}</em>
        </p>
        <p className="flex items-center gap-2">
          <b> Total: ₹{total}</b>
        </p>

        <input
          type="text"
          placeholder="Coupon code😎"
          value={couponCode}
          className="border border-gray-800 rounded-lg p-2 "
          onChange={(e) => setCouponCode(e.target.value)}
        />
        {/* 
// if valid show code */}
        {couponCode &&
          (isValidCouponCode ? (
            <span className="text-green-400 flex items-center gap-1">
              <GrValidate />
              <FaIndianRupeeSign />
              {discount} off using code:
              <code className="flex items-center"> {couponCode}</code>
            </span>
          ) : (
            <span className="text-red-400 flex  items-center">
              <VscError /> Invalid Coupon Code
            </span>
          ))}
      </aside>
    </div>
  );
};

export default Cart;
