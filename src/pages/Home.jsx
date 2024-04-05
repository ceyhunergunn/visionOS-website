import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import DragBtn from "../components/DragBtn";
import { AuthContext } from "../contexts/AuthContext";
import ceyhun from "../assets/ceyhun.png";

const Home = () => {
  const { setPage } = React.useContext(AuthContext);
  useEffect(() => {
    setPage("home");
    //eslint-disable-next-line
  }, []);
  return (
    <div
      className="os-main text-color text-font d-flex flex-column justify-content-center"
      style={{ fontSize: "40px" }}
    >
      <div className="ms-5">h.</div>
      <div className="text-center">
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
          className="text-color2 text-font2"
          style={{ position: "absolute", fontSize: "50px" }}
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
