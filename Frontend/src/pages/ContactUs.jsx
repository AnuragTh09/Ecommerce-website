import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div className="mt-24 p-4  flex flex-col md:flex-row items-center justify-center mb-40 sm:28">
      <div className="w-full md:w-1/2 myAddress shadow-lg">
        <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
          <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div className="py-6 md:py-0 md:px-6">
              <h1 className="text-4xl font-bold">Get in touch</h1>
              <p className="pt-2 pb-4">
                Fill in the form to start a conversation
              </p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <FaLocationDot className="w-5 h-5 mr-2 sm:mr-6" />
                  <span>Una, Himachal Pradesh</span>
                </p>
                <p className="flex items-center">
                  <MdMarkEmailRead className="w-5 h-5 mr-2 sm:mr-6" />
                  <span>thakuranurag432@gmail.com</span>
                </p>
                <p className="flex items-center">
                  <FaPhoneAlt className="w-5 h-5 mr-2 sm:mr-6" />
                  <span>7018603860</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="w-full md:w-1/2 form shadow-lg">
        <section className="p-6 dark:text-gray-800">
          <form
            noValidate=""
            className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50"
          >
            <h2 className="w-full text-3xl font-bold leading-tight">
              Contact us
            </h2>
            <div>
              <label htmlFor="name" className="block mb-1 ml-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                required=""
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 ml-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                required=""
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 ml-1">
                Message
              </label>
              <textarea
                id="message"
                type="text"
                placeholder="Message..."
                className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                class="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-blue-500 text-white focus:bg-blue-600 hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </div>
      <div className="h-auto ">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
