import React, { useState, useEffect, useMemo } from "react";
import "./SearchComponent.css";
import "./SearchComponentResponsiveness.css";
import Container from "../Container/Container";
import CustomDatePickerComponent from "../CustomDatePickerComponent/CustomDatePickerComponent";
import { useDispatch } from "react-redux";
import { carData } from "../CarData/CarData";
import { searchData } from "../../store/searchSlice";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../Debounce/useDebounce";
const SearchComponent = () => {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Debounce input changes
  const debouncedSearch = useDebounce(search, 300);

  // Memoize the filtered data
  const filteredData = useMemo(() => {
    return carData.filter((data) => {
      const matchSearchInput = data.city
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());
      const isWithinDateRange =
        startDate && endDate
          ? data.date >= startDate && data.date <= endDate
          : true;
      setSearchKey(matchSearchInput);
      return matchSearchInput && isWithinDateRange;
    });
  }, [debouncedSearch, startDate, endDate]);

  const filterData = () => {
    if (debouncedSearch.trim() === "" || filteredData.length === 0) {
      alert("Please enter a valid search query");
      return;
    }
    dispatch(searchData(filteredData));
    navigate("/search-results");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    filterData();
  };

  return (
    <Container className="searchComponentContainer">
      <img
        className="searchComponentImage"
        src="https://kyte.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.1ee68d83.webp&w=1920&q=100"
        alt=""
      />
      <div className="searchComponentBox">
        <div className="searchInputBox">
          <span className="searchInputLabel">Where</span>
          <input
            type="text"
            placeholder="City, address, hotel, airport"
            className="searchInput"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
        <div className="searchInputDatePicker">
          <CustomDatePickerComponent
            date={startDate}
            setDate={setStartDate}
            placeholder="Start Date"
            label="From"
            className="searchInputDatePicker"
          />
          <CustomDatePickerComponent
            date={endDate}
            setDate={setEndDate}
            placeholder="End Date"
            label="To"
            className="searchInputDatePicker"
          />
        </div>
        <button className="searchButton" type="submit" onClick={handleSearch}>
          Go
        </button>
      </div>
    </Container>
  );
};
export default SearchComponent;
