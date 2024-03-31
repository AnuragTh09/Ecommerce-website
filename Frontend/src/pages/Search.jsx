import React, { useState } from "react";
import { MdFilterAlt } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { FaSortAlphaDown } from "react-icons/fa";
import ProductCard from "../components/ProductCard";

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(150000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const addToCartHandler = () => {};

  const isPrevPage = 1;
  const isNextPage = 4;

  return (
    <div className="mt-28 product-search w-full h-full flex flex-col lg:flex-row items-center justify-center md:justify-between  ">
      <div className="aside lg:w-[22%] md:w-[34%] p-8 shadow-2xl md:h-[80%] lg:ml-8 mb-6 ">
        <h2 className="flex items-center gap-2 text-3xl  ">
          Filter <MdFilterAlt />
        </h2>

        <div className="sort-div   mt-6">
          <div className="p-2">
            <h3 className="flex items-center font-bold  gap-2">
              Sort: <FaSortAlphaDown />
            </h3>

            <div className="border p-4 border-gray-400">
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value={""}>None</option>
                <option value={"ascending"}>Price (Low to High)</option>
                <option value={"descending"}>Price (High to Low)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="price-div mt-2 ">
          <div className=" p-2">
            <h3 className=" font-bold">
              Max Price:
              <span className="text-blue-500"> {maxPrice || ""} </span>
            </h3>
            <div className="border border-gray-400 p-2 space-y-2 ">
              <input
                className="pl-6"
                type="range"
                min={100}
                max={150000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="category-div mt-2 p-2 ">
          <div>
            <h3 className="flex items-center font-bold  gap-2">
              Category: <BiCategoryAlt />
            </h3>
            <div className=" border border-gray-400 p-4 gap-4 ">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value={"All"}> All </option>
                <option value={"Camera"}>Camera</option>
                <option value={"Laptop"}>Laptop</option>
                <option value={"Mobile"}>Mobile</option>
                <option value={"Smart Watch"}>Smart Watch</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="main pl-8  h-full  w-full lg:w-[75%] space-y-4">
        <h1 className="text-lg font-bold">Products</h1>

        <input
          type="text"
          className="border border-black p-2 rounded-lg"
          placeholder="Search by name.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="search-product-list flex items-center justify-center ">
          <div>
            <ProductCard
              productId={"mac"}
              price={199999}
              stock={5}
              name={"MacBook"}
              handler={addToCartHandler}
              photo="https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg"
            />
          </div>
        </div>

        {/* page number */}
        <div className="flex items-center justify-center gap-2">
          <button
            className={`border w-20 bg-blue-300 border-gray-400  hover:bg-blue-500 hover:text-white h-10 rounded-xl flex items-center justify-center p-4 ${
              !isPrevPage ? "cursor-not-allowed" : ""
            } `}
            disabled={!isPrevPage}
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          >
            Prev
          </button>
          <span>
            {page} of {4}{" "}
          </span>
          <button
            className={`border w-20 bg-blue-300 border-gray-400  hover:bg-blue-500 hover:text-white h-10 rounded-xl flex items-center justify-center p-4 ${
              !isNextPage ? "cursor-not-allowed" : ""
            } `}
            disabled={!isNextPage}
            onClick={() => setPage((prev) => Math.min(prev + 1, 4))}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
