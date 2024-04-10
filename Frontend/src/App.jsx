import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Loader from "./components/Loader.jsx";
import Header from "./components/Header.jsx"
import { Toaster } from "react-hot-toast"
// lazy loading the components
const Home = lazy( () => import( "./pages/Home.jsx" )); 
const Cart = lazy( () => import( "./pages/Cart.jsx" )); 
const Search = lazy( () => import( "./pages/Search.jsx" )); 
const Shipping = lazy( () => import( "./pages/Shipping.jsx"));
const LoginPage = lazy( () => import("./pages/LoginPage.jsx"));
const ContactUs = lazy ( () => import("./pages/ContactUs.jsx"));
const Order = lazy( () => import("./pages/Order.jsx"))
const OrderDetails = lazy( () => import("./pages/OrderDetails.jsx"));
const AppLayout = () => {
  return (
    <Router>
      {/* <Navbar  /> */}
      <Header />
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />

        {/* login user routes  */}
        <Route path="/login" element={<LoginPage />} />

          <Route path="/shipping" element={<Shipping />} />
          <Route path="/orders" element={<Order />} />

        <Route path="/contact" element={<ContactUs />} />

        <Route path="/order/:id" element={<OrderDetails />} />



      </Routes>
      </Suspense>
      <Toaster position="top-right" />
     <div className="h-24 sm:h-auto">
      <Footer />
     </div>
    </Router>
  );
};

export default AppLayout;
