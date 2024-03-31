import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'
import { FaArrowRight } from "react-icons/fa";
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer.jsx'

const Home = () => {

  //handler add to cart
  const addToCartHandler = () => {};


  return (
    <div className='home h-screen '>
      <section>
        <Carousel />
      </section>


    <h1 className='font-bold flex items-center justify-between p-5 '>
        Latest Products
        <Link to='/search' className='findMore x'>
          <p className='flex items-center gap-1 hover:underline'> 
          More
          <FaArrowRight />
          </p>
        </Link>
      </h1>
    
    <div className='flex justify-center '>
      
    <main className='w-full  flex  gap-4 '>
        <ProductCard
        productId={'mac'}
        price={199999} 
        stock={5} 
        name={"MacBook"} 
        handler={addToCartHandler} 
        photo="https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg"  />
      </main>
      
    </div>
    <div className='h-24 sm:h-auto'>
      < Footer />
    </div>
      
    </div>
  )
}

export default Home
