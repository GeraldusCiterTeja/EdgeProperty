import React from "react";
import ImageSlider from "./ImageSlider";

function Modal3({ property, onClose }) {
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
        <img src="images/project3_Drone2SeaSide.jpg" alt="Shanata Seaside"></img>
        <img className="logo" src="images/logo.svg" alt="Shanata Seaside"></img>
        <p className="deskripsi">
          <span>Shanata Seaside</span>  is a newly launched project located on the stunning Pasut Beach. With a development area of 19 are and offering 6 exclusive units, this beachfront property combines serene coastal living with exceptional investment potential.{" "}
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
            <h3>shanata seaside</h3>
            <p><span>Location:</span> Pasut Beach, Tabanan, Bali</p>
            <p><span>Area of Development:</span> 19 Are</p>
            <p><span>Unit:</span> 6 Units</p>
            <p><span>Started:</span> November 2024</p>
          </div>
          <img src="images/logo.svg" alt="Logo EdgeProperty"></img>
        </div>
      </div>
    </div>
  );
}

export default Modal3;
