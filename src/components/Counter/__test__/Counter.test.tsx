import React from "react";
import { Counter } from "../Counter";
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

test("header renders with correct text", () => {
    const component = render(<Counter />);
    const headElement = component.getByTestId("header");

    expect(headElement.textContent).toBe("My counter");
})