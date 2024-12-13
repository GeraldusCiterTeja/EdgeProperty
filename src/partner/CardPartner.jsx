import React from "react";

function CardPartner() {
  const dataPartner = [
    {
      id: 1,
      image: "images/logoPartner1.png",
      text: "Developer",
      span: "Company from Bali",
      alt:"Company from Bali",
    },
    {
      id: 2,
      image: "images/logoPartner3.png",
      text: "Developer",
      span: "Company from Makasar",
      alt: "Company from Makasar",
    },  
  ];

  const dataPartner1 = [
    {
      id: 1,
      image: "images/logoPartner2.png",
      text: "Developer",
      span: "Company from Jakarta",
      alt: "Company from Jakarta",
    },
    {
      id: 2,
      image: "images/logoPartner4.png",
      text: "Developer",
      span: "Company from Jakarta",
      alt: "Company from Jakarta",
    },
  ];

  return (
    <div className="cardAll">
      <div className="cardPartner">
        {dataPartner.map((partner) => (
          <div className="cardPartnerContainer" key={partner.id}>
            <img src={partner.image} alt={partner.alt}></img>
            <h2>
              {partner.text} <span>{partner.span}</span>
            </h2>
          </div>
        ))}
      </div>
      <div className="cardPartner1">
        {dataPartner1.map((partner) => (
          <div className="cardPartnerContainer" key={partner.id}>
            <img src={partner.image} alt={partner.alt}></img>
            <h2>
              {partner.text} <span>{partner.span}</span>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardPartner;
