import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import URLBar from "../components/URLBar";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter basename="/">
        <div className="main">
          <URLBar />
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/contact/" element={<Contact />} />
              <Route path="/portfolio/" element={<Portfolio />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
