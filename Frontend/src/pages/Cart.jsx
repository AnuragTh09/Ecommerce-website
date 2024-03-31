import React, { useEffect, useState } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { GrValidate } from "react-icons/gr";
import { VscError } from "react-icons/vsc";
import CartItems from "../components/CartItems";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "fadfdsa",
    photo: "https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg",
    name: "MacBook",
    price: 3000,
    quantity: 4,
    stock: 10,
  },{
    productId: "fadfdsa",
    photo: "https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg",
    name: "MacBook",
    price: 3000,
    quantity: 4,
    stock: 10,
  },{
    productId: "fadfdsa",
    photo: "https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg",
    name: "MacBook",
    price: 3000,
    quantity: 4,
    stock: 10,
  },
];
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
    <div className="cart-container ">
      <div className="flex flex-col lg:flex-row">
    <div className="cart min-w-full min-h-full flex flex-col md:flex-row  items-center justify-between gap-2 p-4 overflow-y-auto">
      {/* CART 1 */}
      <div className="p-4 w-[70%]  ">
        <main>
          
          {
            cartItems.length > 0 ? cartItems.map((item, index) => (
              <CartItems key={index} cartItemProp={item} />
            )) : <h1> No Items Added!</h1>
          }

        </main>
      </div>

      {/* card 2 */}
      <div className="border w-[60%] p-4 md:p-10 md:w-[30%]  flex flex-col items-start   gap-6 flex-wrap shadow-2xl justify-center">
        <aside className="rounded-lg w-full">
          <div className="flex flex-col">
            <div className="flex justify-between items-center mt-4">
              <p className="text-xl font-semibold">Subtotal:</p>
              <p className="text-xl font-semibold">₹{subtotal}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">Shipping Charges:</p>
              <p className="text-xl font-semibold">₹{shippingCharges}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">Tax:</p>
              <p className="text-xl font-semibold">₹{tax}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">Discount:</p>
              <p className="text-xl font-semibold text-red-600">
                - ₹{discount}
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-xl font-semibold">Total:</p>
              <p className="text-xl font-semibold">₹{total}</p>
            </div>
            <input
              type="text"
              maxLength={15}
              placeholder="Coupon code"
              value={couponCode}
              className="border border-gray-800 rounded-lg p-4 mt-4"
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button className="p-2 text-white bg-blue-500 rounded-lg mt-2">Apply</button>
            {couponCode && (
              <span
                className={`${
                  isValidCouponCode ? "text-green-400" : "text-red-400"
                } flex items-center gap-1 mt-2`}
              >
                {isValidCouponCode ? <GrValidate /> : <VscError />}
                <FaIndianRupeeSign />
                {isValidCouponCode
                  ? `${discount} off using code:`
                  : "Invalid Coupon Code"}
                <code className="flex items-center justify-center "> {couponCode}</code>
              </span>
            )}

        {
          cartItems.length > 0 && 
          <Link to={'/shipping'} className="bg-blue-500 mt-2 p-2 rounded-lg text-white text-center">Checkout</Link>
        }




          </div>
        </aside>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Cart;
