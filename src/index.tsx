import React, { useState, useEffect, Children } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Instructions from "./components/Instructions";
import { Cards } from "./components/Cards";
import { Card } from "./components/Card";
import { NotFound } from "./components/NotFound";
import SimpleFooter from "./components/SimpleFooter";
import { CardModel } from "./models/Card";

const container = document.getElementById("app");
if (container === null) throw new Error("Missing root element");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

interface props {
  children: React.ReactNode;
}

const compApp: React.FC<props> = ({ children }) => {
  return <div>{children}</div>;
};

root.render(<App />);

// root.render(
//   <ChakraProvider>
//     <Welcome name="Sara o Connor" />
//     <Example />
//   </ChakraProvider>
// );

// Router example

// Test example
// root.render(
//   <App />
// );
