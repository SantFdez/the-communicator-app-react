import React, { useContext, useState } from "react";
import "../css/main.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Instructions from "./Instructions";
import { Cards } from "./Cards";
import { Card } from "./Card";
import { NotFound } from "./NotFound";
import SimpleFooter from "./SimpleFooter";
import { CardModel } from "../models/Card";
import { HomePage } from "./HomePage";
import { createContext } from "react";

export const AppCtx = createContext<CardModel | undefined>(undefined);
export const useAppCtx = () => useContext(AppCtx);

export const App = () => {
  // return (
  //   <div>
  //     <SimpleNavBar />
  //     <Outlet />
  //   </div>
  // );

  const [currentCard, setCurrentCard] = useState<CardModel>();
  const [updateCardId, setUpdateCardId] = useState<string>();

  const onCardClick = (card: CardModel) => {
    setCurrentCard(card);
  };

  const updateCurrentCard = (cardId: string) => {
    console.log("Current id received at App.tsx ", cardId);
    setUpdateCardId(cardId);
  };

  // componer contextos, composicion
  return (
    <AppCtx.Provider value={currentCard}>
      <BrowserRouter>
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<HomePage />}>
              <Route
                index
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>Welcome to The Communicator</p>
                  </main>
                }
              />
              <Route path="instructions" element={<Instructions />} />
              <Route
                path="cards"
                element={
                  <Cards
                    onCardClick={onCardClick}
                    updateCardId={updateCardId}
                  />
                }
              >
                <Route
                  index
                  element={
                    <main style={{ padding: "1rem" }}>
                      <p>Select a card</p>
                    </main>
                  }
                />
                <Route
                  path=":cardId"
                  element={
                    <Card
                      cardObj={currentCard}
                      updateCurrentCard={updateCurrentCard}
                    />
                  }
                />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <SimpleFooter />
        </ChakraProvider>
      </BrowserRouter>
    </AppCtx.Provider>
  );
};
