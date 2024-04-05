import React from "react";
import aA from "../assets/aA.png";
import lock from "../assets/lock.png";

const URLBar = () => {
  return (
    <div className="urlbar-bg">
      <div className="d-flex w-100 mx-auto h-100">
        <div className="url-items-flex align-items-center justify-content-start url-width1">
          <div className="url-items ms-3 me-3 d-flex align-items-center justify-content-center">
            <i className="text-color icon-wh bi bi-house"></i>
          </div>
          <div className="url-items d-flex align-items-center justify-content-center">
            <i className="text-color icon-wh bi bi-box-arrow-up-right"></i>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center url-width2">
          <div className="urlbar-bar w-75">
            <div className="row w-100 mx-auto h-100">
              <div className="col-3 d-flex align-items-center justify-content-start">
                <img src={aA} alt="aA" />
              </div>
              <div className="col-6 d-flex align-items-center justify-content-center">
                <img src={lock} alt="lock" className="me-2" />
                <div className="text-color">hicci.com.tr</div>
              </div>
              <div className="col-3"></div>
            </div>
          </div>
        </div>
        <div className="url-items-flex align-items-center justify-content-end url-width1">
          <div className="url-items me-3 d-flex align-items-center justify-content-center">
            <i className="text-color icon-wh bi bi-box-arrow-down"></i>
          </div>
          <div className="url-items me-3 d-flex align-items-center justify-content-center">
            <i className="text-color icon-wh bi bi-box-arrow-up-right"></i>
          </div>
        </div>
      </div>
      <div className="url-items-none align-items-center justify-content-center w-100">
        <div className="url-items me-3 d-flex align-items-center justify-content-center">
          <i className="text-color icon-wh bi bi-house"></i>
        </div>
        <div className="url-items me-3 d-flex align-items-center justify-content-center">
          <i className="text-color icon-wh bi bi-box-arrow-up-right"></i>
        </div>
        <div className="url-items me-3 d-flex align-items-center justify-content-center">
          <i className="text-color icon-wh bi bi-box-arrow-down"></i>
        </div>
        <div className="url-items d-flex align-items-center justify-content-center">
          <i className="text-color icon-wh bi bi-box-arrow-up-right"></i>
        </div>
      </div>
    </div>
  );
};

export default URLBar;
