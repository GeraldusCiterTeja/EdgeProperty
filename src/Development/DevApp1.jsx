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
    title: "Citraland City Losari",
    features: [
      { icon: "🗺️", label: "5,8 Hectare", description: "Land Area" },
      { icon: "🏠", label: "30 Units", description: "Luxury Waterfront Villa" },
      {
        icon: "✈️",
        label: "20 Minutes",
        description: "Soekarno-Hatta Airport",
      },
      { icon: "🚴", label: "1,5 km", description: "Jogging Track" },
      { icon: "🏡", label: "Finehomes", description: "Signature" },
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
