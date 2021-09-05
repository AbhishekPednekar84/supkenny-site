/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

it("renders the main heading", () => {
  render(<Home />);

  const heading = screen.getByRole("heading", {
    name: /Suparna & Kenny/i,
  });

  expect(heading).toBeInTheDocument();
});

it("renders the our story heading", () => {
  render(<Home />);

  const ourStoryHeading = screen.getByRole("heading", {
    name: /our story/i,
  });

  expect(ourStoryHeading).toBeInTheDocument();
});

it("renders the venue heading", () => {
  render(<Home />);

  const venueHeading = screen.getByRole("heading", {
    name: /the venue/i,
  });

  expect(venueHeading).toBeInTheDocument();
});
