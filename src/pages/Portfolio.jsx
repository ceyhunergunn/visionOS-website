import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import DragBtn from "../components/DragBtn";
import { AuthContext } from "../contexts/AuthContext";

import portfolio from "../assets/portfolio-character.png";
import networkapplogo from "../assets/porfolio/networkapplogo.png";
import devicemanagementapplogo from "../assets/porfolio/devicemanagementapplogo.png";
import menuapplogo from "../assets/porfolio/menuapplogo.png";
import rtlsapplogo from "../assets/porfolio/rtlsapplogo.png";
import restaurantapplogo from "../assets/porfolio/restaurantapplogo.png";
import konutapplogo from "../assets/porfolio/konutapplogo.png";

const Portfolio = () => {
  const { setPage } = React.useContext(AuthContext);
  useEffect(() => {
    setPage("portfolio");
    //eslint-disable-next-line
  }, []);

  return (
    <div
      className="os-main text-color text-font d-flex flex-column justify-content-center "
      style={{ fontSize: "40px", padding: "2rem 1rem" }}
    >
      <div className="text-center mb-3">portfolio</div>
      <div className="row w-100 mx-auto">
        <div className="col-lg-3 col-md-3 col-sm-12 d-flex align-items-center justify-content-center">
          <img className="img-width" src={portfolio} alt="img" />
        </div>
        <div className="col-lg-9 col-md-9 col-sm-12 text-center p-0 d-flex align-items-center">
          <div className="row w-100 mx-auto">
            <div
              className="col-lg-4 col-md-6 col-sm-6 my-4 networkapp"
              id="networkapp"
            >
              <div className="portfolio-item mx-auto">
                <img
                  src={networkapplogo}
                  style={{ width: "64px", height: "64px" }}
                  alt="networkapplogo"
                />
              </div>
              <div className="portfolio-app-name">Network APP</div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 my-4 konutapp"
              id="konutapp"
            >
              <div className="portfolio-item mx-auto">
                <img
                  src={konutapplogo}
                  style={{ width: "64px", height: "64px" }}
                  alt="konutapplogo"
                />
              </div>
              <div className="portfolio-app-name">Konut APP</div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 my-4 restaurantapp"
              id="restaurantapp"
            >
              <div className="portfolio-item mx-auto">
                <img
                  src={restaurantapplogo}
                  style={{ width: "64px", height: "64px" }}
                  alt="restaurantapplogo"
                />
              </div>
              <div className="portfolio-app-name">Restaurant APP</div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 my-4 menuapp"
              id="menuapp"
            >
              <div className="portfolio-item mx-auto">
                <img
                  src={menuapplogo}
                  style={{ width: "64px", height: "64px" }}
                  alt="menuapplogo"
                />
              </div>
              <div className="portfolio-app-name">Menu APP</div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 my-4 rtlsapp"
              id="rtlsapp"
            >
              <div className="portfolio-item mx-auto">
                <img
                  src={rtlsapplogo}
                  style={{ width: "64px", height: "64px" }}
                  alt="rtlsapplogo"
                />
              </div>
              <div className="portfolio-app-name">RTLS</div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 my-4 devicemanagementapp"
              id="devicemanagementapp"
            >
              <div className="portfolio-item mx-auto">
                <img
                  src={devicemanagementapplogo}
                  style={{ width: "64px", height: "64px" }}
                  alt="devicemanagementapplogo"
                />
              </div>
              <div className="portfolio-app-name">Device Management APP</div>
            </div>
          </div>
        </div>
      </div>
      <NavBar />
      <DragBtn />
    </div>
  );
};

export default Portfolio;
