import React, { useId } from "react";
import "./FeaturePage.css";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import { features } from "../../assets/assets";

function FeaturesPage() {
  return (
    <div className="featurePage">
      <h1 className="featurePageHeading">Not your average rental car</h1>
      <Container className="featureContainer">
        {features.map((feature) => (
          <div key={feature.id} className="featureCardContainer">
            <Card
              img={feature.img}
              title={feature.title}
              description={feature.description}
            />
          </div>
        ))}
      </Container>
    </div>
  );
}

export default FeaturesPage;
