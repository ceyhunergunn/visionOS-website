import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import DragBtn from "../components/DragBtn";
import { AuthContext } from "../contexts/AuthContext";
import ceyhun from "../assets/ceyhun3.png";

const Home = () => {
  const { setPage } = React.useContext(AuthContext);
  useEffect(() => {
    setPage("home");
    //eslint-disable-next-line
  }, []);

  return (
    <div
      className="os-main text-color text-font d-flex flex-column justify-content-center"
      style={{ fontSize: "40px", padding: "2rem 1rem" }}
    >
      {/* <div className="ms-2">h.</div> */}
      <div className="text-center mb-3">
        developer
        <i className="bi bi-dot" style={{ fontSize: "30px" }}></i>
        engineer
      </div>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ position: "relative" }}
      >
        <img className="img-width" src={ceyhun} alt="img" />
        <div
          className="text-font2 text-style text-center adaptive-bottom"
          style={{ position: "absolute", fontWeight: "bold" }}
        >
          Ceyhun Ergün
        </div>
      </div>
      <NavBar />
      <DragBtn />
    </div>
  );
};

export default Home;
