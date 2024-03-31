import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import '../index.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container fixed bottom-0 left-0 w-full bg-gray-800 text-white text-center ">
      <footer className="footer text-gray-600 body-font fixed-bottom w-full h-auto bg-white border border-gray-200">
        <div className="container p-6 mx-auto flex items-center sm:flex-row flex-col">
          <Link className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
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
            <span className="ml-3 text-xl">E-commerce</span>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 E-commerce —
            <a
              href="https://twitter.com/AnuragThakur_09"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              Anurag Thakur
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="https://www.linkedin.com/in/anurag-thakur-979984224/"
              className="text-gray-500 flex items-center justify-center w-10 h-10 rounded-full hover:bg-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/AnuragTh09"
              className="ml-3 text-gray-500 flex items-center justify-center w-10 h-10 rounded-full hover:bg-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/AnuragThakur_09"
              className="ml-3 text-gray-500 flex items-center justify-center w-10 h-10 rounded-full hover:bg-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter className="w-5 h-5" />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
