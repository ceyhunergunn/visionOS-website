import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import DragBtn from "../components/DragBtn";
import { AuthContext } from "../contexts/AuthContext";

const Portfolio = () => {
  const { setPage } = React.useContext(AuthContext);
  useEffect(() => {
    setPage("portfolio");
    //eslint-disable-next-line
  }, []);
  return (
    <div className="os-main">
      Portfolio
      <NavBar />
      <DragBtn />
    </div>
  );
};

export default Portfolio;
