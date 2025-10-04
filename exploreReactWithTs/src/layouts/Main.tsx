import React from "react";
import Navbar from "../features/navbar/Navbar";
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
