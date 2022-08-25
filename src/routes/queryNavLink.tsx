import React from "react";
import { useLocation, NavLink } from "react-router-dom";

export default function QueryNavLink({
  to,
  ...props
}: {
  children: string;
  to: string;
  key: number;
}) {
  let location = useLocation();
  return (
    <NavLink
      to={to + location.search}
      {...props}
      style={({ isActive }) => {
        return {
          display: "block",
          margin: "1rem 0",
          color: isActive ? "Red" : "",
        };
      }}
    />
  );
}
