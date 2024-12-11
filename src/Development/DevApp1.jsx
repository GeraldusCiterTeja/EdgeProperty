import React, { useState } from "react";
import Modal from "./Modal";


const property1 = {
  image: "images/project1_Drone-1.jpg",
  name: "Shanata Tanah Lot",
  location: "Belalang, Tabanan, Bali",
};


const PropertyCard = ({ property, setIsOpen }) => (
  <div className="card" onClick={() => setIsOpen(true)}>
    <img src={property1.image} alt={property1.name} />
    <div className="card-info">
      <h3>{property1.name}</h3>
      <p><i className="bi bi-geo-alt"></i>{property1.location}</p>
    </div>
  </div>
);

function DevApp1() {
  const [isOpen, setIsOpen] = useState(false);
  
  const property = {
    title: "Shanata Tanah Lot",
    features: [
      { icon: <i className="bi bi-bounding-box"></i>
        , label: "28 Are", description: "Area of Development" },
      { icon: <i className="bi bi-building"></i>
        , label: "30 Units", description: "House" },
      { icon: <i className="bi bi-pin-map"></i> , label: "Location", description: "Belalang, Tabanan, Bali" },
      { icon: <i className="bi bi-clock"></i>
        , label: "Started", description: "2022" },
    ],
    images: [
      "images/project1_Drone-1.jpg",
      "images/project1_Shanata Tanah Lot.jpg",
      "images/project1_Siteplan Shanata Tanah Lot.jpg",
    ],
  };

  return (
    <div>
      <PropertyCard property={property} setIsOpen={setIsOpen} />

      {isOpen && <Modal property={property} onClose={() => setIsOpen(false)} />}
    </div>
  );
}

export default DevApp1;
