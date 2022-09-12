import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Cards } from "../../components/Cards";
import { App } from "../../components/App";
import { dataCardList } from "../../mocks/handlers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";


test("consume API correctly ", async () => {
  const onCardClick = () => {};
  const updateCardId = "";

  const component = render(
    <ChakraProvider>
      <BrowserRouter>
        <Cards onCardClick={onCardClick} updateCardId={updateCardId} />
      </BrowserRouter>
    </ChakraProvider>
  );

  await waitFor(() => {
    const listOfCards = component.getByTestId("card-list");
    console.log(listOfCards);
    dataCardList.forEach((card) => {
      expect(screen.getByText(card.title)).toBeInTheDocument();
    });
  });
});

test("allows Cards get list", async () => {});
