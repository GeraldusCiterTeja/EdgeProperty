import React, { useState } from "react";
import Modal2 from "./Modal2";


const property1 = {
  image: "images/project2_DroneTaman2.jpg",
  name: "Taman Shanata",
  location: "Nyitdah, Tabanan, Bali",
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

function DevApp2() {
  const [isOpen, setIsOpen] = useState(false);
  
  const property = {
    title: "Taman Shanata",
    features: [
      { icon: <i className="bi bi-bounding-box"></i>
        , label: "1.5 ha", description: "Area of Development" },
      { icon: <i className="bi bi-building"></i>
        , label: "95 Units", description: "House" },
      { icon: <i className="bi bi-pin-map"></i> , label: "Location", description: "Nyitdah, Tabanan, Bali" },
      { icon: <i className="bi bi-clock"></i>
        , label: "Started", description: "2023" },
    ],
    images: [
      "images/project2_DroneTaman2.jpg",
      "images/project2_Siteplan-Taman-Shanata.jpg",
      "images/project2_DroneTaman1.jpg",
      "images/project2_.jpg",
    ],
  };

  return (
    <div>

      <PropertyCard property={property} setIsOpen={setIsOpen} />

      {isOpen && <Modal2 property={property} onClose={() => setIsOpen(false)} />}
    </div>
  );
}

export default DevApp2;
