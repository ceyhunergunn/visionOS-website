import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import DragBtn from "../components/DragBtn";
import { AuthContext } from "../contexts/AuthContext";
import networkapp from "../assets/porfolio/networkapp.png";

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
            <div
              class="frontSide"
              style={{ borderRadius: "0px", borderBottomLeftRadius: "36px" }}
            >
              <img
                src={networkapp}
                className="w-100 h-100"
                alt="networkapp"
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
                src={networkapp}
                className="w-100 h-100"
                alt="networkapp"
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
                src={networkapp}
                className="w-100 h-100"
                alt="networkapp"
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
