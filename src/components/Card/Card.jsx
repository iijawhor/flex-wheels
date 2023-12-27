import React from "react";
import "./Card.css";
function Card({ img, title, description, className }) {
  return (
    <div className="cardContainer">
      <div className="cardImageContainer">
        <img src={img} alt="" className="cardImage" />
      </div>
      <div className="cardDetails">
        <h2 className="cardTitle">{title}</h2>
        <p className="cardDescription">{description}</p>
      </div>
    </div>
  );
}

export default Card;
