import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import DragBtn from "../components/DragBtn";
import { AuthContext } from "../contexts/AuthContext";

const Home = () => {
  const { setPage } = React.useContext(AuthContext);
  useEffect(() => {
    setPage("home");
    //eslint-disable-next-line
  }, []);
  return (
    <div className="os-main">
      <NavBar />
      <DragBtn />
    </div>
  );
};

export default Home;