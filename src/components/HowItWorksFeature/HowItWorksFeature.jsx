import React, { useState } from "react";
import "./HowItWorksFeature.css";
import Container from "../Container/Container";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function HowItWorksFeature({ title, description }) {
  const [toggleDescription, setToggleDescription] = useState(false);
  return (
    <Container className="howItWorksFeature">
      <div className="howItWorksFeatureDescriptionContainer">
        <div
          className="howItWorksFeatureToggle"
          onClick={() => setToggleDescription(!toggleDescription)}
        >
          <h1 className="howItWorksFeatureDescriptionTitle">{title}</h1>
          <KeyboardArrowDownIcon />
        </div>

        {toggleDescription && (
          <p className="howItWorksFeatureDescription">{description}</p>
        )}
      </div>
    </Container>
  );
}

export default HowItWorksFeature;
