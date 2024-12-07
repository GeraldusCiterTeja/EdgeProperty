import React from "react";

function Container() {
  return (
    <div className="container">
      <div className="imageContainer">
        <img src="images/project1_Drone-1.jpg" className="image" alt="Image" />
        <div className="overlay">
          <p>DEVELOPMENT</p>
        </div>
      </div>
      <div className="imageContainer">
        <img src="images/project4_VillaRoyalBalangan.jpg" className="image" alt="Image" />
        <div className="overlay">
          <p>CONTRACTOR</p>
        </div>
      </div>
      <div className="imageContainer">
        <img src="images/logoPartner2.png" className="image" alt="Image" />
        <div className="overlay">
          <p>PARTNER</p>
        </div>
      </div>
    </div>
  );
}

export default Container;
