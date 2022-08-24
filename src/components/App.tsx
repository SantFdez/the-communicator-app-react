import React from 'react';
import '../css/main.css';
import { Outlet, Link } from "react-router-dom";
import { Counter } from './Counter/Counter';


export const App = () => {
  return (
    <div>
      <h1>The Communicator</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/cards">Cards</Link> |{" "}
        <Link to="/instructions">Instructions</Link>
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
