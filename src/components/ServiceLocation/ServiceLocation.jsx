import React from "react";
import "./ServiceLocation.css";
import Container from "../Container/Container";
function ServiceLocation() {
  const availableLocation = [
    { name: "Delhi", id: 1 },
    { name: "Mumbai", id: 2 },
    { name: "Bangalore", id: 3 },
    { name: "Hyderabad", id: 4 },
    { name: "Kolkata", id: 5 },
    { name: "Pune", id: 6 },
    { name: "Ahmedabad", id: 7 },
    { name: "Jaipur", id: 8 },
    { name: "Gurgaon", id: 9 },
    { name: "Mysore", id: 10 },
    { name: "Trivandrum", id: 11 },
    { name: "Sindh", id: 12 }
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
              <li key={location.id} className="serviceLcation">
                {location.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default ServiceLocation;
