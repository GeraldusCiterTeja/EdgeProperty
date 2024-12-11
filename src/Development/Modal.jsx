import React from "react";
import ImageSlider from "./ImageSlider";

function Modal({ property, onClose }) {
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
        <img src="images/project1_Drone-1.jpg"></img>
        <img className="logo" src="images/logo.svg"></img>
        <p className="deskripsi">
          <span>Shanata Tanah Lot</span> was launched in 2022, during the
          challenging times of the COVID-19 pandemic. The project spanned 28 are
          of land with a total of 30 units. Despite the circumstances, all units
          were successfully sold within just 3 months, showcasing its
          exceptional appeal and investment value.{" "}
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
            <h3>Shanata Tanah Lot</h3>
            <p>Location: Belalang, Tabanan, Bali</p>
            <p>Area of Development: 28 Are</p>
            <p>Unit: 30 Units</p>
            <p>Started: 2022</p>
          </div>
          <img src="images/logo.svg"></img>
        </div>
      </div>
    </div>
  );
}

export default Modal;
