import React from "react";
import { NavLink } from "react-router-dom";

interface NavLinksProps {}

export const NavLinks: React.FC<NavLinksProps> = ({}) => {
  return (
    <div className="flex ">
      <NavLink
        to="/locators"
        className={({ isActive }) =>
          isActive ? "navlink navlink-active" : "navlink"
        }
      >
        Locators
      </NavLink>
      <NavLink
        to="/counter"
        className={({ isActive }) =>
          isActive ? "navlink navlink-active" : "navlink"
        }
      >
        Counter
      </NavLink>
      <NavLink
        to="/todos"
        className={({ isActive }) =>
          isActive ? "navlink navlink-active" : "navlink"
        }
      >
        Todos
      </NavLink>
    </div>
  );
};
