import React, { useState } from "react";
import "./CarsInFleet.css";
import "./CarsInFleetResponsive.css";
import Container from "../Container/Container";
import Card from "../Card/Card";
import { carsInFleet } from "../CarData/carsInFleet";

function CarsInFleet() {
  return (
    <Container className="carsInFleetContainer">
      <h1 className="carsInFleetHeader">Cars in our fleet</h1>
      <div className="carsFleetBox">
        {carsInFleet.map((category, categoryIndex) => (
          <div key={categoryIndex} className="carsInFleet">
            <div id="carsInFleetCardsContainer" className="carsInFleetCards">
              {category.map((car, carIndex) => (
                <Card
                  className="carsInFleetCard"
                  key={carIndex}
                  img={car.imgUrl}
                />
              ))}
            </div>
            <h2>{category[0].title}</h2>
            <p>{category[0].description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default CarsInFleet;
