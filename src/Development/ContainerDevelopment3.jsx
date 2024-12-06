import React from "react";
import ImageGallery from "./DevelopmentModal";

function ContainerDepelopment3() {
  const images = [
    "images/project3_SitePlanSeasidePasut.jpg",
    "images/project3_Drone1SeaSide.jpg",
    "images/project3_Drone2SeaSide.jpg",
  ];

  return (
    <div className="containerDevelopment3">
      <ImageGallery images={images} />
      <div className="deskripsi">
        <h2>SHANATA SEASIDE</h2>
        <p>
          <span>shanata seaside</span> is a newly launched project located on
          the stunning Pasut Beach. With a development area of 19 are and
          offering 6 exclusive units, this beachfront property combines serene
          coastal living with exceptional investment potential.
        </p>
      </div>
    </div>
  );
}

export default ContainerDepelopment3;
