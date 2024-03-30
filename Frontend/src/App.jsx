import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Loader from "./components/Loader.jsx";
import Header from "./components/Header.jsx"

// lazy loading the components
const Home = lazy( () => import( "./pages/Home.jsx" )); 
const Cart = lazy( () => import( "./pages/Cart.jsx" )); 
const Search = lazy( () => import( "./pages/Search.jsx" )); 
const Shipping = lazy( () => import( "./pages/Shipping.jsx"));

const AppLayout = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Header />
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />

        {/* login user routes  */}
        <Route path="/shipping" element={<Shipping />} />



      </Routes>
      </Suspense>
     
      <Footer />
    </Router>
  );
};

export default AppLayout;
