import React from "react";
import ImageGallery from "./DevelopmentModal";

function ContainerDepelopment1() {
  const images = [
    "images/project1_Drone-1.jpg",
    "images/project1_Shanata Tanah Lot.jpg",
    "images/project1_Siteplan Shanata Tanah Lot.jpg",
  ];

  return (
    <div className="containerDevelopment1">
      <ImageGallery images={images} />
      <div className="deskripsi">
        <h2>SHANATA TANAH LOT</h2>
        <p>
          <span>Shanata Tanah Lot</span> was launched in 2022, during the
          challenging times of the COVID-19 pandemic. The project spanned 28 are
          of land with a total of 30 units. Despite the circumstances, all units
          were successfully sold within just 3 months, showcasing its
          exceptional appeal and investment value.
        </p>
      </div>
    </div>
  );
}

export default ContainerDepelopment1;
