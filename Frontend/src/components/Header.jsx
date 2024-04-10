import { RiSearch2Line } from "react-icons/ri";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi2";
import { MdHelpOutline } from "react-icons/md";
import '../index.css'

const user = {_id:"", role:""}

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header bg-white flex items-center space-x-5 shadow-md  justify-between p-4 text-black">
      <div className="logo">
        <Link to={'/'} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round" // Changed to camelCase
              strokeLinejoin="round" // Changed to camelCase
              strokeWidth="2" // Changed to camelCase
              className="w-10 h-10 text-white p-2 bg-gray-800 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </Link>

      </div>

      <div className="flex items-center gap-4">
        <Link to={'/'} >
          <h1 className="flex items-center gap-2 hover:underline">Home <HiOutlineHome className="text-lg"/>|</h1>
        </Link>
        <Link to={'/contact'} >
          <h1 className="flex items-center gap-2 hover:underline">Help <MdHelpOutline className="text-lg"/>|</h1>
        </Link>
      </div>
      <div className=" flex items-center gap-2 text-xl p-1
      ">
        <Link to='/search'>
          <div className="p-2 rounded-full hover:bg-gray-600">
            <RiSearch2Line className=" text-lg" />
          </div>
        </Link>
        <Link to={'/favorite'}>   
          <div className="p-2 rounded-full hover:bg-gray-600">
            <IoHeartOutline className=" text-lg" />
          </div>
        </Link>
        <Link to={'/cart'}>
        <div className="p-2 rounded-full hover:bg-gray-600">
            <IoCartOutline className=" text-lg " />
          </div>
        </Link>
        <Link to={'/orders'}>
          <div className="p-2 rounded-full hover:bg-gray-600">
            <IoBagOutline className="text-lg " />
          </div>
        </Link>
        <Link to={'/login'}>
          <div className="p-2 rounded-full hover:bg-gray-600">
            <FaRegUser className="text-base " />
          </div>
        </Link>
        <Link to={'/menu'}>
          <div className="p-2 rounded-full hover:bg-gray-600">
            <FiMenu className=" " />
          </div>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Header;
