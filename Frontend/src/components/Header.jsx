import { RiSearch2Line } from "react-icons/ri";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header flex items-center space-x-5 w-screen justify-between p-5 bg-gray-700 text-white">
      <div className="logo">
        <h1 className="text-3xl p-2">🚀</h1>
      </div>

      <div className="section  flex items-center  space-x-5">
        <div className="flex items-center justify-between">
          <ul className="flex gap-5">
            <li className="text-xl font-bold ">Men</li>
            <li className="text-xl font-bold ">Women</li>
            <li className="text-xl font-bold ">Kids</li>
          </ul>
        </div>
      </div>

      <div className=" ">
        <div className="flex items-center gap-2  ">
        <RiSearch2Line className="text-4xl font-bold "/>
        <input type="text" placeholder="search" className=" rounded p-2" />
        </div>
      </div>
      
      <div className=" flex items-center gap-4">
        <IoHeartOutline className="text-3xl  " />
        <IoCartOutline className=" text-3xl " />
        <FiMenu className="text-3xl  " />
      </div>
    </div>
  );
};

export default Header;
