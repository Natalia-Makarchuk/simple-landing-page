import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("My dream team landing", () => {
  test("renders header title", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1, name: /My dream team/i })
    ).toBeInTheDocument();
  });
});
