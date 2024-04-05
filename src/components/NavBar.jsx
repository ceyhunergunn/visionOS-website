import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const NavBar = () => {
  const { page } = React.useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="navbar-bg">
      <div className="navbar-items" onClick={() => navigate("/")}>
        <div
          className={page === "home" ? "navbar-item-selected" : "navbar-item"}
        >
          <i className="text-color icon-wh bi bi-house"></i>
        </div>
      </div>
      <div className="navbar-items" onClick={() => navigate("/portfolio")}>
        <div
          className={
            page === "portfolio" ? "navbar-item-selected" : "navbar-item"
          }
        >
          <i className="text-color icon-wh bi bi-grid"></i>
        </div>
      </div>
      <div className="navbar-items" onClick={() => navigate("/contact")}>
        <div
          className={
            page === "contact" ? "navbar-item-selected" : "navbar-item"
          }
        >
          <i className="text-color icon-wh bi bi-telephone"></i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
