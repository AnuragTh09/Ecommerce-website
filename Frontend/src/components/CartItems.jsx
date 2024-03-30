import React from "react";
import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CiCircleMinus, CiCirclePlus, CiSquarePlus } from "react-icons/ci";

const CartItems = ({ cartItemProp }) => {
  const { photo, productId, quantity, stock, price, name } = cartItemProp;
  return (
    <div className="">

      <div className="cart-item flex flex-col  md:flex-row   items-center justify-between  shadow-lg p-4">

        <aside className=" flex flex-col sm:flex-col  lg:flex-row items-center font-bold  mb-4 ">
        <img src={photo} alt={productId} className="w-64" />

          <Link to={`/product/${productId}`}>{name}</Link>
          <span className=""> ₹{price} </span>
        </aside>

        <div className="flex items-center justify-center  gap-6">
          <button className="border w-10 hover:bg-gray-600 hover:text-white h-10 rounded-xl flex items-center justify-center text-2xl  ">
            <CiCircleMinus />
          </button>
          <p>{quantity} </p>
          <button className="border w-10 hover:bg-gray-600 hover:text-white h-10 rounded-xl flex items-center justify-center text-2xl">
            <CiCirclePlus />
          </button>
          <button className="border w-10 hover:bg-gray-600 hover:text-white h-10 rounded-xl flex items-center justify-center  ">
            <FaTrash />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
