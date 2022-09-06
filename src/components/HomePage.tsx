import React from "react";
import "../css/main.css";
import { Outlet } from "react-router-dom";
import SimpleNavBar from "./SimpleNavBar";

export const HomePage = () => {
  return (
    <div>
      <SimpleNavBar />
      <Outlet />
    </div>
  );
};
