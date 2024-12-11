import React from "react";
import ImageSlider from "./ImageSlider";

function Modal4({ property, onClose }) {
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
        <img src="images/project4_VillaRoyalBalangan.jpg"></img>
        <img className="logo" src="images/logo.svg"></img>
        <p className="deskripsi">
          <span>Royal Balangan</span> is a luxurious villa project located in the scenic Balangan, Badung. The development spans 5 are and is divided into 3 exclusive villa units, offering a perfect blend of privacy, comfort, and breathtaking views, ideal for both investment and peaceful retreat.{" "}
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
            <h3>Royal balangan</h3>
            <p><span>Location:</span> Balangan, Badung, Bali</p>
            <p><span>Area of Development:</span> 5 Are</p>
            <p><span>Unit:</span> 3 Units</p>
            <p><span>Started:</span> 2024</p>
          </div>
          <img src="images/logo.svg"></img>
        </div>
      </div>
    </div>
  );
}

export default Modal4;
