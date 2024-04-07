import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import DragBtn from "../components/DragBtn";
import { AuthContext } from "../contexts/AuthContext";
import contact from "../assets/contact-character.png";

const Contact = () => {
  const { setPage } = React.useContext(AuthContext);
  useEffect(() => {
    setPage("contact");
    //eslint-disable-next-line
  }, []);

  return (
    <div
      className="os-main text-color text-font d-flex flex-column justify-content-center"
      style={{ fontSize: "40px", padding: "2rem 1rem" }}
    >
      <div className="text-center">contact</div>
      <div className="row">
        <img
          className="d-xl-block d-lg-block d-md-block d-none col-lg-6 col-md-6 col-sm-12 img-width"
          src={contact}
          alt="img"
        />
        <div className="col-lg-6 col-md-6 col-sm-12 text-center d-flex align-items-center justify-content-center">
          <div className="text-font2 w-100">
            <div className="contact-title">e-mail</div>
            <div className="mb-3">
              <a
                className="contact-detail"
                href="mailto:iamceyhunergun@gmail.com"
              >
                iamceyhunergun@gmail.com
              </a>
            </div>
            <div className="contact-title">phone</div>
            <div className="mb-3">
              {" "}
              <a className="contact-detail" href="tel:+905383115789">
                +90 538 311 5789
              </a>
            </div>
            <div className="contact-title">address</div>
            <div className="contact-detail">Istanbul, Turkey</div>
          </div>
        </div>
      </div>
      <NavBar />
      <DragBtn />
    </div>
  );
};

export default Contact;
