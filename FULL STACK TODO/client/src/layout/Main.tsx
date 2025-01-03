import React from "react";
import Navbar from "../components/layout/Navbar";
import { Outlet } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Main;
