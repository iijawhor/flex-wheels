import React from "react";
import "./ServiceLocation.css";
import Container from "../Container/Container";
function ServiceLocation() {
  const availableLocation = [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Hyderabad",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Gurgaon",
    "Mysore",
    "Trivananthapuram",
    "Sindh"
  ];
  return (
    <Container className="serviceLocationContainer">
      <h2 className="serviceLocationHeading">Locations</h2>
      <div className="serviceLocationBox">
        <div className="locationMapBox">
          <img
            className="locationMap"
            src="https://kyte.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flocations.e187a9b0.webp&w=1920&q=100"
            alt=""
          />
        </div>
        <div className="locationListContainer">
          <ul className="locationList">
            {availableLocation.map((location) => (
              <li className="serviceLcation">{location}</li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default ServiceLocation;
