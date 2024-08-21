import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
