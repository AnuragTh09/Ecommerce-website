import React from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
// import { CiCirclePlus } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";

const ProductsProps = {
  productId: "",
  photo: "",
  name: "",
  price: "",
  stock: "",
  handler: () => {},
};

const server = "abcdefgh";

const ProductCard = ({ productId, photo, name, price, stock, handler }) => {
  return (
    <div className="flex items-center justify-center ml-28 sm:ml-6">
    <div className=" mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="card card-compact p-2 bg-base-100 shadow-xl border">
        <figure>
          <img src={photo} alt={name} className="w-60 h-40 object-cover " />
        </figure>
        <div className="card-body flex flex-col items-center justify-center space-y-3">
          <h2 className="card-title text-xl font-extrabold">{name}</h2>
          <span className="flex flex-none items-center text-blue-400 text-lg font-semibold ">
            {" "}
            <FaIndianRupeeSign /> {price}{" "}
          </span>

          <div className="card-actions justify-end">
            <button className="btn bg-blue-400 p-2 rounded-lg text-white
            ">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card card-compact p-2 bg-base-100 shadow-xl border">
        <figure>
          <img src={photo} alt={name} className="w-60 h-40 object-cover " />
        </figure>
        <div className="card-body flex flex-col items-center justify-center space-y-3">
          <h2 className="card-title text-xl font-extrabold">{name}</h2>
          <span className="flex flex-none items-center text-blue-400 text-lg font-semibold ">
            {" "}
            <FaIndianRupeeSign /> {price}{" "}
          </span>

          <div className="card-actions justify-end">
            <button className="btn bg-blue-400 p-2 rounded-lg text-white
            ">Buy Now</button>
          </div>
        </div>
      </div>
     <div className="card card-compact p-2 bg-base-100 shadow-xl border">
        <figure>
          <img src={photo} alt={name} className="w-60 h-40 object-cover " />
        </figure>
        <div className="card-body flex flex-col items-center justify-center space-y-3">
          <h2 className="card-title text-xl font-extrabold">{name}</h2>
          <span className="flex flex-none items-center text-blue-400 text-lg font-semibold ">
            {" "}
            <FaIndianRupeeSign /> {price}{" "}
          </span>

          <div className="card-actions justify-end">
            <button className="btn bg-blue-400 p-2 rounded-lg text-white
            ">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductCard;
