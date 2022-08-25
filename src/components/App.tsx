import React from "react";
import "../css/main.css";
import { Outlet, Link } from "react-router-dom";
import { Counter } from "./Counter/Counter";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Divider } from "@chakra-ui/react";
import Cards from "../routes/cards";
import Instructions from "../routes/instructions";

export const App = () => {
  return (
    <div>
      <h1>The Communicator</h1>
      <nav>
        <Link to="/cards">Cards</Link> |{" "}
        <Link to="/instructions">Instructions</Link>
        <Divider />
        {/* <Tabs>
          <TabList>
            <Tab>Cards</Tab>
            <Tab>Instructions</Tab>
            <Tab>Three</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Cards></Cards>
            </TabPanel>
            <TabPanel>
              <Instructions></Instructions>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs> */}
      </nav>
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
