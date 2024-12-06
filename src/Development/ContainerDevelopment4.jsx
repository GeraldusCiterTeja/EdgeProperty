import React from "react";
import ImageGallery from "./DevelopmentModal";

function ContainerDepelopment4() {
  const images = [
    "images/project4_VillaRoyalBalangan.jpg",
    "images/project4_SiteplanRoyalBalangan.jpg",
    "images/project4_JantungRoyalBalangan.jpg",
  ];

  return (
    <div className="containerDevelopment4">
      <ImageGallery images={images} />
      <div className="deskripsi">
        <h2>ROYAL BALANGAN</h2>
        <p>
          <span>Royal Balangan</span> is a luxurious villa project located in the scenic Balangan, Badung. The development spans 5 are and is divided into 3 exclusive villa units, offering a perfect blend of privacy, comfort, and breathtaking views, ideal for both investment and peaceful retreat.
        </p>
      </div>
    </div>
  );
}

export default ContainerDepelopment4;
