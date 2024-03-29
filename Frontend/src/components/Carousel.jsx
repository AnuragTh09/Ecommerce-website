import React, { useState } from 'react';

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 1 ? 4 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 4 ? 1 : prevSlide + 1));
  };

  return (
    <div className="carousel w-full p-16 flex mt ">
      <div id="slide1" className={`carousel-item relative w-full ${activeSlide === 1 ? 'block' : 'hidden'}`}>
        <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
      </div>
      <div id="slide2" className={`carousel-item relative w-full ${activeSlide === 2 ? 'block' : 'hidden'}`}>
        <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
      </div>
      <div id="slide3" className={`carousel-item relative w-full ${activeSlide === 3 ? 'block' : 'hidden'}`}>
        <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
      </div>
      <div id="slide4" className={`carousel-item relative w-full ${activeSlide === 4 ? 'block' : 'hidden'}`}>
        <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-1/2">
        <button onClick={handlePrevSlide} className="btn btn-circle p-2 border border-black rounded-full w-10 hover:bg-gray-400">❮</button> 
        <button onClick={handleNextSlide} className="btn btn-circle p-2 border border-black rounded-full w-10 hover:bg-gray-400">❯</button>
      </div>
    </div>
  );
};

export default Carousel;
