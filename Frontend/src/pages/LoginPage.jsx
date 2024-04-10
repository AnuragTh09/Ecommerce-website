import React from "react";
import Footer from "../components/Footer";
import { FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase.js";

const LoginPage = () => {
  const loginHandler = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      // console.log(user);

    } catch (error) {
      toast.error("Sign In Failed ❌");
    }
  };

  return (
    <div className="login-container flex items-center justify-center h-screen mb-4">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white dark:bg-gray-50 dark:text-gray-800 shadow-xl">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form noValidate action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Username
            </label>
            <input
              required
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            <div className="flex justify-end text-xs dark:text-gray-600">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm bg-blue-500 text-white">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={loginHandler}
            aria-label="Log in with Google"
            className="ml-3 text-gray-500 flex items-center justify-center w-10 h-10 rounded-full hover:bg-black"
          >
            <FaGoogle className="w-5 h-5 text-blue-500" />
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Don't have an account?
          <a
            rel="noopener noreferrer"
            href="#"
            className="underline dark:text-gray-800"
          >
            Sign up
          </a>
        </p>
      </div>
      <div className="sm:h-auto h-20">
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
