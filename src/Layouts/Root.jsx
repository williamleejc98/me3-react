import React from "react";
import Header from "../Components/Shared/Header/Header";
import Footer from "../Components/Shared/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Banner from "../Components/Banner/Banner";

const Root = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <div className="banner__section">
          {/* Add video as background */}
          <video autoPlay loop muted>
            <source src="/src/assets/img/banner/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="content">
            <Header />
            <Banner />
          </div>
        </div>
      ) : (
        <Header />
      )}
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
