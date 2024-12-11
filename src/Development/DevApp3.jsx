import React, { useState } from "react";
import Modal3 from "./Modal3";


const property1 = {
  image: "images/project3_SitePlanSeasidePasut.jpg",
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

function DevApp3() {
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
