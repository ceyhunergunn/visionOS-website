import React, { useEffect } from "react";
import aA from "../assets/aA.png";
import lock from "../assets/lock.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import cv from "../assets/Ceyhun_Ergun_CV.pdf";

const URLBar = () => {
  const { blur, setBlur } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const downloadCV = () => {
    const fileUrl = cv;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Ceyhun_Ergun_CV.pdf";
    link.target = "_blank";
    link.click();
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--bg-blur", `${blur}px`);
  }, [blur]);

  return (
    <div className="urlbar-bg">
      <div className="d-flex w-100 mx-auto h-100">
        <div className="url-items-flex align-items-center justify-content-center url-width1">
          <div
            className="url-items me-2 d-flex align-items-center justify-content-center"
            onClick={() => navigate(-1)}
          >
            <i className="text-color icon-wh bi bi-caret-left"></i>
          </div>
          <div
            className="url-items me-2 d-flex align-items-center justify-content-center"
            onClick={() => downloadCV()}
          >
            <i className="text-color icon-wh bi bi-box-arrow-down"></i>
          </div>
          <div
            className="url-items me-2 d-flex align-items-center justify-content-center"
            onClick={() => window.open("https://resume.hicci.com.tr/")}
          >
            <i className="text-color icon-wh bi bi-box-arrow-up-right"></i>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center url-width2">
          <div className="urlbar-bar w-100">
            <div className="row w-100 mx-auto h-100">
              <div className="col-3 d-flex align-items-center justify-content-start">
                <img src={aA} alt="aA" />
              </div>
              <div className="col-6 d-flex align-items-center justify-content-center">
                <img src={lock} alt="lock" className="me-2" />
                <div className="text-color text-font2">hicci.com.tr</div>
              </div>
              <div className="col-3"></div>
            </div>
          </div>
        </div>
        <div className="url-items-flex align-items-center justify-content-end url-width1">
          <input
            type="range"
            min="10"
            max="200"
            value={blur}
            onChange={(e) => setBlur(e.target.value)}
          />
        </div>
      </div>
      <div className="url-items-none align-items-center justify-content-center w-100">
        <div
          className="url-items me-2 d-flex align-items-center justify-content-center"
          onClick={() => navigate(-1)}
        >
          <i className="text-color icon-wh bi bi-caret-left"></i>
        </div>
        <div
          className="url-items me-2 d-flex align-items-center justify-content-center"
          onClick={() => downloadCV()}
        >
          <i className="text-color icon-wh bi bi-box-arrow-down"></i>
        </div>
        <div
          className="url-items me-3 d-flex align-items-center justify-content-center"
          onClick={() => window.open("https://resume.hicci.com.tr/")}
        >
          <i className="text-color icon-wh bi bi-box-arrow-up-right"></i>
        </div>
        <input
          className="w-50"
          type="range"
          min="10"
          max="200"
          value={blur}
          onChange={(e) => setBlur(e.target.value)}
        />
      </div>
    </div>
  );
};

export default URLBar;
