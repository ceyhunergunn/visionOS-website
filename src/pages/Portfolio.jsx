import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import DragBtn from "../components/DragBtn";
import { AuthContext } from "../contexts/AuthContext";

import portfolio from "../assets/portfolio-character.png";
import networkapp from "../assets/porfolio/networkapp.png";
import devicemanagementapp from "../assets/porfolio/devicemanagementapp.png";
import menuapp from "../assets/porfolio/menuapp.png";
import rtls from "../assets/porfolio/rtlsapp.png";
import restaurantapp from "../assets/porfolio/restaurantapp.png";
import loginapp from "../assets/porfolio/loginapp.png";
import konutapp from "../assets/porfolio/konutapp.png";

const Portfolio = () => {
  const { setPage } = React.useContext(AuthContext);
  useEffect(() => {
    setPage("portfolio");
    //eslint-disable-next-line
  }, []);

  return (
    <div
      className="os-main text-color text-font d-flex flex-column justify-content-center"
      style={{ fontSize: "40px", padding: "2rem 1rem" }}
    >
      <div className="text-center mb-3">portfolio</div>
      <div className="row w-100 mx-auto">
        <div className="col-lg-3 col-md-3 col-sm-12 d-flex align-items-center justify-content-center">
          <img className="img-width" src={portfolio} alt="img" />
        </div>
        <div className="col-lg-9 col-md-9 col-sm-12 text-center p-0">
          <div className="d-flex align-items-center justify-content-center">
            <div class="myCard">
              <div class="innerCard">
                <div
                  class="frontSide"
                  style={{ borderRadius: "0px", borderTopLeftRadius: "24px" }}
                >
                  <img
                    src={networkapp}
                    className="w-100 h-100"
                    alt="networkapp"
                    style={{ borderRadius: "0px", borderTopLeftRadius: "24px" }}
                  />
                </div>
                <div
                  class="backSide"
                  style={{ borderRadius: "0px", borderTopLeftRadius: "24px" }}
                ></div>
              </div>
            </div>
            <div class="myCard">
              <div class="innerCard">
                <div
                  class="frontSide"
                  style={{ borderRadius: "0px", borderTopRightRadius: "24px" }}
                >
                  <img
                    src={networkapp}
                    className="w-100 h-100"
                    alt="networkapp"
                    style={{
                      borderRadius: "0px",
                      borderTopRightRadius: "24px",
                    }}
                  />
                </div>
                <div
                  class="backSide"
                  style={{ borderRadius: "0px", borderTopRightRadius: "24px" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <div class="myCard">
              <div class="innerCard">
                <div
                  class="frontSide"
                  style={{
                    borderRadius: "0px",
                    borderBottomLeftRadius: "24px",
                  }}
                >
                  <img
                    src={networkapp}
                    className="w-100 h-100"
                    alt="networkapp"
                    style={{
                      borderRadius: "0px",
                      borderBottomLeftRadius: "24px",
                    }}
                  />
                </div>
                <div
                  class="backSide"
                  style={{
                    borderRadius: "0px",
                    borderBottomLeftRadius: "24px",
                  }}
                ></div>
              </div>
            </div>
            <div class="myCard">
              <div class="innerCard">
                <div
                  class="frontSide"
                  style={{
                    borderRadius: "0px",
                    borderBottomRightRadius: "24px",
                  }}
                >
                  <img
                    src={networkapp}
                    className="w-100 h-100"
                    alt="networkapp"
                    style={{
                      borderRadius: "0px",
                      borderBottomRightRadius: "24px",
                    }}
                  />
                </div>
                <div
                  class="backSide"
                  style={{
                    borderRadius: "0px",
                    borderBottomRightRadius: "24px",
                  }}
                ></div>
              </div>
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
