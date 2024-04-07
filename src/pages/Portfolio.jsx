import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import DragBtn from "../components/DragBtn";
import { AuthContext } from "../contexts/AuthContext";
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
      className="os-main text-color text-font "
      style={{ fontSize: "40px", padding: "0rem 0rem" }}
    >
      <div className="ms-2">h.</div>
      <div className="text-center">portfolio</div>
      <div className="d-flex">
        <div class="myCard">
          <div class="innerCard">
            <div class="frontSide" style={{ borderRadius: "0px" }}>
              <img
                src={networkapp}
                className="w-100 h-100"
                alt="networkapp"
                style={{ borderRadius: "0px" }}
              />
            </div>
            <div class="backSide" style={{ borderRadius: "0px" }}></div>
          </div>
        </div>{" "}
        <div class="myCard">
          <div class="innerCard">
            <div class="frontSide" style={{ borderRadius: "0px" }}>
              <img
                src={devicemanagementapp}
                className="w-100 h-100"
                alt="devicemanagementapp"
                style={{ borderRadius: "0px" }}
              />
            </div>
            <div class="backSide" style={{ borderRadius: "0px" }}></div>
          </div>
        </div>{" "}
        <div class="myCard">
          <div class="innerCard">
            <div class="frontSide" style={{ borderRadius: "0px" }}>
              <img
                src={menuapp}
                className="w-100 h-100"
                alt="menuapp"
                style={{ borderRadius: "0px" }}
              />
            </div>
            <div class="backSide" style={{ borderRadius: "0px" }}></div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div class="myCard">
          <div class="innerCard">
            <div
              class="frontSide"
              style={{ borderRadius: "0px", borderBottomLeftRadius: "36px" }}
            >
              <img
                src={restaurantapp}
                className="w-100 h-100"
                alt="restaurantapp"
                style={{ borderRadius: "0px", borderBottomLeftRadius: "36px" }}
              />
            </div>
            <div
              class="backSide"
              style={{ borderRadius: "0px", borderBottomLeftRadius: "36px" }}
            ></div>
          </div>
        </div>
        <div class="myCard">
          <div class="innerCard">
            <div class="frontSide" style={{ borderRadius: "0px" }}>
              <img
                src={konutapp}
                className="w-100 h-100"
                alt="konutapp"
                style={{ borderRadius: "0px" }}
              />
            </div>
            <div class="backSide" style={{ borderRadius: "0px" }}></div>
          </div>
        </div>
        <div class="myCard">
          <div class="innerCard">
            <div
              class="frontSide"
              style={{ borderRadius: "0px", borderBottomRightRadius: "36px" }}
            >
              <img
                src={rtls}
                className="w-100 h-100"
                alt="rtls"
                style={{ borderRadius: "0px", borderBottomRightRadius: "36px" }}
              />
            </div>
            <div
              class="backSide"
              style={{ borderRadius: "0px", borderBottomRightRadius: "36px" }}
            >
              Network Monitoring Application
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
