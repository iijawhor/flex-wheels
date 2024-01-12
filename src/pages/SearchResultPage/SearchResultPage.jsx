import React, { useEffect } from "react";
import "./SearchResultsPage.css";
import SearchResults from "../../components/SearchResults/SearchResults";
import Container from "../../components/Container/Container";
function SearchResultPage() {
  let headerHeight;
  useEffect(() => {
    const header = document.querySelector(".headerComponent");
    headerHeight = header.offsetHeight;
    console.log("headerHeight In Effect In SRC ", headerHeight);
  }, []);

  return (
    <div className="searchResultPage" style={{ paddingTop: headerHeight }}>
      <SearchResults />
    </div>
  );
}

export default SearchResultPage;
