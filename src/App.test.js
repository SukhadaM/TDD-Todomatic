import { render } from "@testing-library/react";
import React from "react";
import App from "./App";
import '@testing-library/jest-dom'

describe("App Component Layout", () => {
  test("Should render Heading", async () => {
    const { getByText } = render(<App data={[]} />);
    const headingText = getByText("Todomatic");
    expect(headingText).toBeDefined();
  });

});