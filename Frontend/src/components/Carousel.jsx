import React, { useState } from "react";

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 1 ? 4 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 4 ? 1 : prevSlide + 1));
  };

  return (
    <div className="carousel w-full p-2 flex mt-20  flex-col items-center justify-center
  ">

      <div className="">
      <div
        id="slide1"
        className={`carousel-item relative w-full ${
          activeSlide === 1 ? "block" : "hidden"
        }`}
      >
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-96 object-contain"
        />
      </div>
      <div
        id="slide2"
        className={`carousel-item relative w-full ${
          activeSlide === 2 ? "block" : "hidden"
        }`}
      >
        <img
          src="https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-96 object-contain"
        />
      </div>
      <div
        id="slide3"
        className={`carousel-item relative w-full ${
          activeSlide === 3 ? "block" : "hidden"
        }`}
      >
        <img
          src="https://images.unsplash.com/photo-1578242174372-e26b3681587f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-96 object-contain"
        />
      </div>
      <div
        id="slide4"
        className={`carousel-item relative w-full ${
          activeSlide === 4 ? "block" : "hidden"
        }`}
      >
        <img
          src="https://images.unsplash.com/photo-1591970698020-e685959dcdaa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-96 object-contain"
        />
      </div>
      
      </div>
      <div className="flex items-center gap-40 mt-2">
        <button
          onClick={handlePrevSlide}
          className="btn btn-circle p-2 border border-black rounded-full w-10 hover:bg-gray-400"
        >
          ❮
        </button>
        <button
          onClick={handleNextSlide}
          className="btn btn-circle p-2 border border-black rounded-full w-10 hover:bg-gray-400"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
