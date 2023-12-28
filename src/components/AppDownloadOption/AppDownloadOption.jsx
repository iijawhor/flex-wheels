import React from "react";
import Container from "../Container/Container";
import "./AppDownloadOptionBox.css";
function AppDownloadOption() {
  return (
    <Container className="appDownloadOptionContainer">
      <div className="appDownloadOptionBox">
        <h1 className="appDownloadOptionBoxHeader">
          &quot;There's a better way to rent&quot;
        </h1>
        <div className="downloadOption">Download Now</div>
      </div>
    </Container>
  );
}

export default AppDownloadOption;
