import React, { useState } from "react";

function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <button className="slider-btn prev" onClick={prevSlide}>❮</button>
      <img src={images[current]} alt={`Slide ${current + 1}`} />
      <button className="slider-btn next" onClick={nextSlide}>❯</button>
    </div>
  );
}

export default ImageSlider;
