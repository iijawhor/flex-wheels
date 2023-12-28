import React, { useEffect, useState } from "react";
import authService from "../../firebase/firebaseAuthentication";
import { carsInOurFleet } from "../../assets/assets";
import FeaturesPage from "../FeaturesPage/FeaturesPage";
import HowItWorksSection from "../../components/HowItWorksSection/HowItWorksSection";
import ServiceLocation from "../../components/ServiceLocation/ServiceLocation";
function HomePage() {
  const [user, setUser] = useState();
  useEffect(() => {
    // authService.getCurrentUser().then((user) => setUser(user));
    authService.getCurrentUser().then((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  if (!user) {
    return (
      <div>
        <h1>Please login to proceed</h1>
      </div>
    );
  }
  return (
    <div>
      <FeaturesPage />
      <HowItWorksSection />
      <ServiceLocation />
    </div>
  );
}

export default HomePage;
