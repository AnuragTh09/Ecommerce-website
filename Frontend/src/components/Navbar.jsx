
const Navbar = () => {
    return(
        <div className="navbar bg-[#F5F5F5] w-screen h-10 flex items-center justify-between p-8">
            <div className="text-4xl p-2">🤸‍♂️</div>
            <div className="p-5">
                <ul className="flex  space-x-4 ">
                    <li className="cursor-pointer font-bold text-md  hover:text-[#757575]">Help |</li>
                    <li className="cursor-pointer font-bold text-md  hover:text-[#757575]">Join Us |</li>
                    <li className="cursor-pointer font-bold text-md  hover:text-[#757575]">Sign In |</li>
                    <li className="cursor-pointer font-bold text-md  hover:text-[#757575] ">Log In </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar