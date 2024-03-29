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
    <div className="w-screen h-screen p-4  ">
      <div className="productCard  p-1 w-72 h-96 hover:bg-gray-300 ">
        <div className="card  p-4 h-auto flex flex-col items-center space-y-1 rounded-md ">
          <img
            src={photo}
            alt={name}
            className="w-72 h-60 object-cover  border rounded-lg"
          />
          <p>{name}</p>
          <span className="flex flex-none items-center text-blue-400 text-lg font-semibold ">
            {" "}
            <FaIndianRupeeSign /> {price}{" "}
          </span>
          <div className="absolute bottom-1/3  ">
            <button 
              className="text-lg p-2 bg-black text-white rounded-full hover:rotate-45  duration-300"
              onClick={() => handler()}
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
