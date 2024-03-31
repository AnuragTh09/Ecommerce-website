import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { LiaSignInAltSolid } from "react-icons/lia";
import { IoMdHelpCircleOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar bg-[#F5F5F5] w- h-8 flex items-center justify-between p-2 shadow-md">
      <div className="text-2xl p-2">🤸‍♂️</div>
      <div className="p-4">
        <ul className="flex  space-x-4 items-center">
          <Link to={'/Help'} className="cursor-pointer font-bold text-sm  flex
          items-center gap-1 hover:text-[#757575]">
            <IoMdHelpCircleOutline />
            Help |
          </Link>
          
          <Link to={'/signIn'} className="cursor-pointer  font-bold text-sm flex gap-1 items-center hover:text-[#757575]">
            <LiaSignInAltSolid />
            Sign In |
          </Link>
          {/* <Link to={'/login'} className="cursor-pointer font-bold text-sm  hover:text-[#757575] ">
            Log In |
          </Link> */}
          <Link to={'/user'}>
            <FaUserCircle className="text-lg mt-1 text-center"/>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
