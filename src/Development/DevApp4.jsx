import React, { useState } from "react";
import Modal4 from "./Modal4";


const property1 = {
  image: "images/project4_SiteplanRoyalBalangan.jpg",
  name: "Royal balangan",
  location: "Balangan, Badung, Bali",
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

function DevApp4() {
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
      "images/project4_VillaRoyalBalangan.jpg",
      "images/project4_SiteplanRoyalBalangan.jpg",
      "images/project4_JantungRoyalBalangan.jpg",
    ],
  };

  return (
    <div>
      <PropertyCard property={property} setIsOpen={setIsOpen} />

      {isOpen && <Modal4 property={property} onClose={() => setIsOpen(false)} />}
    </div>
  );
}

export default DevApp4;
