import React, { StrictMode } from "react";
import Slider from "react-slick";

const Beranda = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slides = [
    { id: 1, image: `images/home1.jpg`, text: "Slide 1", alt:"Royal Balangan"},
    { id: 2, image: `images/home2.jpg`, text: "Slide 2", alt:"Shata Tanah Lot"},
  ];

  return (
    <StrictMode>
      <div className="beranda" id="beranda">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="carousel-slide">
              <img src={slide.image} alt={slide.alt}></img>
              <h2>Edge Property</h2>
              <button className="buttonBeranda" ><a href="#about">Find Out More</a></button>
            </div>
          ))}
        </Slider>
      </div>
    </StrictMode>
  );
};

export default Beranda;
