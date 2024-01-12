import React, { useEffect, useRef, useState } from "react";
import "./HomePage.css";
import authService from "../../firebase/firebaseAuthentication";
import { carsInOurFleet } from "../../assets/assets";
import FeaturesPage from "../FeaturesPage/FeaturesPage";
import HowItWorksSection from "../../components/HowItWorksSection/HowItWorksSection";
import ServiceLocation from "../../components/ServiceLocation/ServiceLocation";
import AppDownloadOption from "../../components/AppDownloadOption/AppDownloadOption";
import Footer from "../../components/Footer/Footer";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import CarsInFleet from "../../components/CarsInFleet/CarsInFleet";

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
      <div style={{ margin: 80, textAlign: "center" }}>
        <h1>Please login to proceed</h1>
      </div>
    );
  }
  const header = document.querySelector(".headerComponent");
  const headerHeight = header.offsetHeight;

  return (
    <div className="homePage" style={{ paddingTop: headerHeight }}>
      <SearchComponent />
      <FeaturesPage />
      <CarsInFleet />
      <HowItWorksSection />
      <ServiceLocation />
      <AppDownloadOption />
      <Footer />
    </div>
  );
}

export default HomePage;
