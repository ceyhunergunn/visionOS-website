import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import DragBtn from "../components/DragBtn";
import { AuthContext } from "../contexts/AuthContext";

const Contact = () => {
  const { setPage } = React.useContext(AuthContext);
  useEffect(() => {
    setPage("contact");
    //eslint-disable-next-line
  }, []);
  return (
    <div className="os-main">
      Contact
      <NavBar />
      <DragBtn />
    </div>
  );
};

export default Contact;
