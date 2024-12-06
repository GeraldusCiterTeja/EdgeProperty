import React from "react";
import ImageGallery from "./DevelopmentModal";

function ContainerDepelopment2() {
  const images = [
    "images/project2_DroneTaman2.jpg",
    "images/project2_DroneTaman1.jpg",
    "images/project2_.jpg",
    "images/project2_Siteplan-Taman-Shanata.jpg",
  ];

  return (
    <div className="containerDevelopment2">
      <ImageGallery images={images} />
      <div className="deskripsi">
        <h2>TAMAN SHANATA</h2>
        <p>
          <span> Taman Shanata</span> was developed following the sold-out success of Shanata Tanah Lot. Spanning 1.5 hectares, the project offers a total of 90 land plots, designed to meet diverse needs and provide exceptional investment opportunities.
        </p>
      </div>
    </div>
  );
}

export default ContainerDepelopment2;
