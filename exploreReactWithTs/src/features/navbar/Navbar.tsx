import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="flex gap-3 items-center justify-center sticky top-0 bg-white">
        <Link to={"/"}>Home</Link>
        <Link to={"/signup"}>Signup</Link>
        <Link to={"/posts"}>Posts</Link>
      </div>
    </>
  );
};

export default Navbar;
