import React from "react";
import "./HowItWorksSection.css";
import HowItWorksFeature from "../HowItWorksFeature/HowItWorksFeature";
function HowItWorksSection() {
  return (
    <section className="howItWorksSection">
      <div className="howItWorksSectionContainer">
        <div className="howItWorksFeatureSection">
          <div className="howItWorksFeatureSectionHead">
            <h1 className="howItWorksFeatureSectionHeadTitle">How it works</h1>
            <p className="howItWorksFeatureSectionHeadText">
              Stay in control of your trip from beginning to end.
            </p>
          </div>
          <div className="howItWorksFeatureSectionFeatures">
            <HowItWorksFeature
              title="Book a car from our fleet"
              description="Tell us where you want to get the car and choose a good time to meet."
            />
            <HowItWorksFeature
              title="Get it delivered"
              description="Tell us where you want to get the car and choose a good time to meet."
            />
            <HowItWorksFeature
              title="Return the car"
              description="If you chose delivery, a Kyte Surfer will pick up the car at the return address you selected. Otherwise, you can return the car to one of our lots."
            />
          </div>
        </div>
        <div className="howItWorksSectionImageContainer">
          <img
            className="howItWorksSectionImage"
            src="https://kyte.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhow-it-works-step-3.06309c5f.webp&w=1920&q=100"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
