import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders gitHub repos title", () => {
  render(<App />);
  const linkElement = screen.getByText(/gitHub repos/i);
  expect(linkElement).toBeInTheDocument();
});
