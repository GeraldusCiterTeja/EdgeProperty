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
