import React, { useState } from "react";
import Modal3 from "./Modal3";


const property1 = {
  image: "images/project3_SitePlanSeasidePasut.jpg",
  name: "shanata seaside",
  location: "Pasut Beach, Tabanan, Bali",
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

function DevApp3() {
  const [isOpen, setIsOpen] = useState(false);
  
  const property = {
    title: "shanata seaside",
    features: [
      { icon: <i className="bi bi-bounding-box"></i>
        , label: "19 Are", description: "Area of Development" },
      { icon: <i className="bi bi-building"></i>
        , label: "6 Units", description: "House" },
      { icon: <i className="bi bi-pin-map"></i> , label: "Location", description: "Pasut Beach, Tabanan, Bali" },
      { icon: <i className="bi bi-clock"></i>
        , label: "Started", description: "November 2024" },
    ],
    images: [
      "images/project3_Drone1SeaSide.jpg",
      "images/project3_Drone1SeaSide.jpg",
      "images/project3_SitePlanSeasidePasut.jpg",
    ],
  };

  return (
    <div>
      <PropertyCard property={property} setIsOpen={setIsOpen} />

      {isOpen && <Modal3 property={property} onClose={() => setIsOpen(false)} />}
    </div>
  );
}

export default DevApp3;
