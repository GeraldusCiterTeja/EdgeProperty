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
    title: "Royal balangan",
    features: [
      { icon: <i className="bi bi-bounding-box"></i>
        , label: "5 Are", description: "Area of Development" },
      { icon: <i className="bi bi-building"></i>
        , label: "3 Units", description: "House" },
      { icon: <i className="bi bi-pin-map"></i> , label: "Location", description: "Balangan, Badung, Bali" },
      { icon: <i className="bi bi-clock"></i>
        , label: "Started", description: "2024" },
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
