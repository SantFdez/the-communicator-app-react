import React from "react";
import { render, waitForElementToBeRemoved } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Card } from "../../components/Card";
import { CardModel } from "../../models/Card";
import { AppCtx } from "../../components/App";
import { ChakraProvider } from "@chakra-ui/react";

test("category name renders with correct text", async () => {
  const card: CardModel = {
    id: 1,
    title: "Question to test Title",
    categoryName: "Category of Test",
    categoryImg: "",
    isActive: true,
    question: "This is a test question",
  };

  const component = render(
    <ChakraProvider>
      <AppCtx.Provider value={card}>
        <Card />
      </AppCtx.Provider>
    </ChakraProvider>
  );

  const categoryName = component.getByTestId("categoryName");

  expect(categoryName.textContent).toBe(card.categoryName);
});
