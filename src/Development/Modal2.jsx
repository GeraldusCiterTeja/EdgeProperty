import React from "react";
import ImageSlider from "./ImageSlider";

function Modal2({ property, onClose }) {
  const handleOutsideClick = (e) => {
    if (e.target.className === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <img src="images/project2_DroneTaman2.jpg"></img>
        <img className="logo" src="images/logo.svg"></img>
        <p className="deskripsi">
          <span>Taman Shanata was</span> developed following the sold-out success of Shanata Tanah Lot. Spanning 1.5 hectares, the project offers a total of 90 land plots, designed to meet diverse needs and provide exceptional investment opportunities.{" "}
        </p>
        <div className="modal-features">
          {property.features.map((feature, index) => (
            <div key={index} className="modal-feature">
              <span className="feature-icon">{feature.icon}</span>
              <div>
                <p className="feature-label">{feature.label}</p>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <ImageSlider images={property.images} />
        <div className="location">
          <div className="info">
            <h3>Taman Shanata</h3>
            <p><span>Location:</span> Nyitdah, Tabanan, Bali</p>
            <p><span>Area of Development:</span> 1.5 ha</p>
            <p><span>Unit:</span> 95 Units</p>
            <p><span>Started:</span> 2023</p>
          </div>
          <img src="images/logo.svg"></img>
        </div>
      </div>
    </div>
  );
}

export default Modal2;
