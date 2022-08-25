import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { ChakraProvider } from "@chakra-ui/react";
import { Welcome } from "./components/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Instructions from "./routes/instructions";
import Cards from "./routes/cards";
import { Card } from "./routes/card";
import { NotFound } from "./components/NotFound";

const container = document.getElementById("app");
if (container === null) throw new Error("Missing root element");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(
//   <ChakraProvider>
//     <Welcome name="Sara o Connor" />
//     <Example />
//   </ChakraProvider>
// );

// Router example
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Welcome to The Communicator</p>
              </main>
            }
          />
          <Route path="instructions" element={<Instructions />} />
          <Route path="cards" element={<Cards />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select a card</p>
                </main>
              }
            />
            <Route path=":cardId" element={<Card />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ChakraProvider>
  </BrowserRouter>
);

// Test example
// root.render(
//   <App />
// );

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState("banana");

  useEffect(() => {
    console.log("Applying effect");
    document.title = `You clicked ${count} times`;
    return () => {
      console.log("Cleaning up");
    };
  });

  return (
    <div>
      <p> You clicked {count} times</p>
      <p> The fruit is {fruit}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <br />
      <button onClick={() => setFruit(fruit + fruit)}>
        Click to add same fruit
      </button>
    </div>
  );
}
