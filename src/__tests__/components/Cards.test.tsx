import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Cards } from "../../components/Cards";
import { App } from "../../components/App";
import { dataCardList } from "../../mocks/handlers";

test("consume API correctly ", async () => {
//   beforeAll(() => {
//     Object.defineProperty(window, "matchMedia", {
//       writable: true,
//       value: jest.fn().mockImplementation((query) => ({
//         matches: false,
//         media: query,
//         onchange: null,
//         addListener: jest.fn(),
//         removeListener: jest.fn(),
//         addEventListener: jest.fn(),
//         removeEventListener: jest.fn(),
//         dispatchEvent: jest.fn(),
//       })),
//     });
//   });

  const component = render(<App />);

  await waitFor(() => {
    const listOfCards = component.getByTestId("card-list");
    console.log(listOfCards);
    dataCardList.forEach((card) => {
      expect(screen.getByText(card.title)).toBeInTheDocument();
    });
  });
});


test("allows Cards get list", async () => {});
