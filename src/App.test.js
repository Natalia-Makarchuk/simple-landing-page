import React from "react";
import { render, screen, within } from "@testing-library/react";
import App from "./App";

describe("My dream team landing", () => {
  test("renders header title", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1, name: /My dream team V3/i })
    ).toBeInTheDocument();
  });

  test("renders at least one team card with name and position", () => {
    render(<App />);
    const card = screen.getByRole("img", { name: /john doe/i }).closest("div");
    expect(card).toBeInTheDocument();

    const utils = within(card);
    expect(utils.getByText(/john doe/i)).toBeInTheDocument();
    expect(utils.getByText(/software engineer/i)).toBeInTheDocument();
  });
});
