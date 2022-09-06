import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import { CardModel } from "../models/Card";

export default function QueryNavLink({
  to,
  onCardClick,
  cardObj,
  ...props
}: {
  children: string;
  to: string;
  key: number;
  cardObj: CardModel;
  onCardClick: (card: CardModel) => void;
  // updateSelectedCard: (cardId: string) => void;
}) {
  let location = useLocation();
  return (
    <NavLink onClick={() => onCardClick(cardObj)}
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
