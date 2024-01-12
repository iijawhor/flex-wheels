import React from "react";
import "./SearchResults.css";
import "./SearchResultsResponsiveness.css";
import { useSelector } from "react-redux";
import Container from "../Container/Container";
import Button from "../Button/Button";
function SearchResults() {
  const searchResults = useSelector((state) => state.search.searchResult);

  return (
    <Container className="searchResultsContainer">
      <div className="searchResults">
        {searchResults.map((searchData) => (
          <div className="searchResult" key={searchData.id}>
            <div className="searchResultDetails">
              <div className="searchResultImageConatainer">
                <img
                  className="searchResultImage"
                  src={searchData.imageUrl}
                  alt={searchData.name || "img"}
                />
              </div>
              <div className="searchResultSpecifications">
                <h3 className="searchResultCarClass">{searchData.carClass}</h3>
                <h4 className="searchResultCarName">{searchData.carName}</h4>
                <div className="seatDetails">
                  <p className="searchResultCarSeats">{searchData.seats}</p>
                  <p className="searchResultCarLuggageSpace">
                    {searchData.space}
                  </p>
                </div>
                <button className="searchResultCarDetailsSeeButton">
                  See Details
                </button>
                <hr className="searchResultLine" />
                <div className="searchResultDescription">
                  <p className="searchResultDescriptionText">
                    {searchData.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="searchResultSlotBookOption">
              <div className="rentDetail">
                <h2 className="carRent">{searchData.rent}</h2>
                <span className="offers">{searchData.offers}</span>
              </div>
              <Button name="Select" className="carBookButton" />
            </div>
          </div>
          //<div className="searchResult">
        ))}
        {/* <hr className="searchResultBottomLine" /> */}
      </div>
    </Container>
  );
}

export default SearchResults;
