import { RiSearch2Line } from "react-icons/ri";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header flex items-center space-x-5 shadow-md w-screen justify-between p-5 mt-2 text-black">
      <div className="logo">
        <h1 className="text-2xl p-2">🚀Logo</h1>
      </div>

      <div>
        <Link to={'/'} >
        <h1>Home</h1>

        </Link>
      </div>

      {/* <div className="section  flex items-center  space-x-5">
        <div className="flex items-center justify-between">
          <ul className="flex gap-5">
            <li className="text- font-bold ">Men</li>
            <li className="text-xl font-bold ">Women</li>
            <li className="text-xl font-bold ">Kids</li>
          </ul>
        </div>
      </div> */}

      {/* <div className=" ">
        <div className="flex items-center gap-2 relative ">
          <input
            type="text"
            placeholder="Search"
            className="p-2 text-black   border border-black rounded-lg"
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 "
          >
            <RiSearch2Line className="text-3xl font-bold text-black" />
          </button>
        </div>
      </div> */}

      <div className=" flex items-center gap-2 text-xl p-1
      ">
        <Link to='/search'>
          <div className="p-2 rounded-full hover:bg-gray-600">
            <RiSearch2Line />
          </div>
        </Link>
        <Link to={'/favorite'}>   
          <div className="p-2 rounded-full hover:bg-gray-600">
            <IoHeartOutline />
          </div>
        </Link>
        <Link to={'/cart'}>
        <div className="p-2 rounded-full hover:bg-gray-600">
            <IoCartOutline className=" text- " />
          </div>
        </Link>
        <Link to={'/menu'}>
          <div className="p-2 rounded-full hover:bg-gray-600">
            <FiMenu className="text-  " />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
