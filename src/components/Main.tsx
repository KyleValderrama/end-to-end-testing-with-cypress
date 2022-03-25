import React from "react";
import { Outlet } from "react-router-dom";
import { NavLinks } from "./NavLinks";

interface MainProps {}
export const Main: React.FC<MainProps> = ({}) => {
  return (
    <div className="h-screen w-8/12 flex flex-col">
      <NavLinks />
      <Outlet />
    </div>
  );
};
