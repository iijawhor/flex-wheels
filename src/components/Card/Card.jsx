import React from "react";
import "./Card.css";
function Card({ img, title, description, className, id, selectButton }) {
  return (
    <div className={`${className} cardContainer`} id={id}>
      <div className="cardImageContainer">
        <img src={img} alt="images" className="cardImage" />
      </div>
      {title && description ? (
        <div className="cardDetails">
          <h2 className="cardTitle">{title}</h2>
          <p className="cardDescription">{description}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Card;
