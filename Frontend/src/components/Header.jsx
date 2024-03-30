import { RiSearch2Line } from "react-icons/ri";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import '../index.css'

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header bg-white flex items-center space-x-5 shadow-md  justify-between p-4 text-black">
      <div className="logo">
        <h1 className="text-2xl p-2">🚀Logo</h1>
      </div>

      <div>
        <Link to={'/'} >
        <h1>Home</h1>

        </Link>
      </div>
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
    </div>
  );
};

export default Header;
