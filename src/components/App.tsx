import React from "react";
import "../css/main.css";
import { Outlet, Link } from "react-router-dom";
import { Counter } from "./Counter/Counter";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Divider,
} from "@chakra-ui/react";
import SimpleNavBar from "./SimpleNavBar";

export const App = () => {
  return (
    <div>
      <SimpleNavBar />
      <Outlet />
    </div>
  );
  // Test example
  // return (
  //     <div>
  //         <Counter />
  //     </div>
  // );
};
