import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Shipping = () => {
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    country: "",
    state: "",
    city: "",
    pinCode: "",
  });

  //navigate hook used to navigate () => and to where to navigate it back
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  // handling navigation
  const handleNavigate = () => {
    navigate("/cart");
  };

  return (
    <div className="flex justify-center items-center h-screen mt-4 gap-4 ">
      <div className="w-96 p-8 bg-white shadow-2xl rounded-xl">
        <div className="border p-6">
          <form className="flex flex-col" onSubmit={""}>
            <h1 className="text-2xl font-bold mb-4">Shipping Address</h1>

            <div className="flex mb-4">
              <input
                type="text"
                required
                placeholder="Address"
                name="address"
                value={shippingInfo.address}
                onChange={changeHandler}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex mb-4">
              <select
                name="country"
                required
                value={shippingInfo.country}
                onChange={changeHandler}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Choose Country</option>
                <option value="India">India</option>
                <option value="America">America</option>
              </select>
            </div>

            <div className="flex mb-4">
              <select
                name="state"
                required
                value={shippingInfo.state}
                onChange={changeHandler}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Choose State</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Haryana">Haryana</option>
              </select>
            </div>

            <div className="flex mb-4">
              <select
                name="city"
                required
                value={shippingInfo.city}
                onChange={changeHandler}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Choose City</option>
                <option value="Una">Una</option>
                <option value="Shimla">Shimla</option>
                <option value="Kullu">Kullu</option>
                <option value="Kangra">Kangra</option>
                <option value="Mandi">Mandi</option>
                <option value="Bilaspur">Bilaspur</option>
              </select>
            </div>

            <div className="flex mb-4">
              <input
                type="number"
                required
                placeholder="Pin code"
                name="pinCode"
                value={shippingInfo.pinCode}
                onChange={changeHandler}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Pay Now!
            </button>
            <div className="flex justify-center items-center mt-4 ">
              <button onClick={handleNavigate} className="text-4xl border w-10 hover:bg-blue-500 hover:text-white h-10 rounded-xl flex items-center justify-center  ">
                <IoMdArrowRoundBack />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
