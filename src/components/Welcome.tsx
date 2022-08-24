import React from "react";
import "../css/main.css";

export interface Props {
  name: string;
}

export const Welcome: React.FC<Props> = (props) => {
  return <h1>Hello, {props.name}</h1>;
};
