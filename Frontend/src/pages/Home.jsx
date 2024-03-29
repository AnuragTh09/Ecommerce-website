import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'
import { FaArrowRight } from "react-icons/fa";
import ProductCard from '../components/ProductCard';


const Home = () => {

  //handler add to cart
  const addToCartHandler = () => {};


  return (
    <div className='home w-screen h-auto'>
      <section>
        {/* <Carousel /> */}
      </section>


    <h1 className='font-bold flex items-center justify-between p-5'>
        Latest Products
        <Link to='/search' className='findMore x'>
          <p className='flex items-center gap-1 hover:underline'> 
          More
          <FaArrowRight />
          </p>
        </Link>
      </h1>

      <main className='w-screen flex gap-4 overflow-auto'>
        <ProductCard 
        productId={'mac'}
        price={199999} 
        stock={5} 
        name={"MacBook"} 
        handler={addToCartHandler} 
        photo="https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg"  />
      </main>
      
    </div>
  )
}

export default Home
