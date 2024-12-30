import React from "react";
import { NavLink } from "react-router-dom";

const RightNav = () => {
  const navItems = [
    { id: 1, path: "/", label: "Home" },
    { id: 2, path: "/products", label: "Products" },
    { id: 3, path: "/posts", label: "Posts" },
  ];
  return (
    <div className="w-[70%]">
      <ul className="flex justify-end items-center gap-3">
        {navItems.map((navItem) => (
          <li key={navItem.id} className="font-bold text-[18px] ">
            <NavLink
              to={navItem.path}
              className={({ isActive }) =>
                `${isActive ? "text-green-500" : "text-teal-300"} `
              }
            >
              {navItem.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightNav;
