// NPM packages
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

// Project files
import CurrencySelector from "./CurrencySelector";

// Initial state
const localCurrency = "usd";
const setLocalCurrency = jest.fn();

test("should render CurrencySelector without crashing", () => {
  // Arrange
  render(
    <CurrencySelector
      localCurrency={localCurrency}
      setLocalCurrency={setLocalCurrency}
    />
  );

  // Assert
  const labelElement = screen.getByText("Currency:");

  // Act
  expect(labelElement).toBeInTheDocument();
});

test("should have a working add to cart button", () => {
  // Arrange
  render(
    <CurrencySelector
      localCurrency={localCurrency}
      setLocalCurrency={setLocalCurrency}
    />
  );

  // Act
  const selectElement = screen.getByTestId("select");
  fireEvent.change(selectElement, { target: { value: 2 } });

  // Assert
  expect(setLocalCurrency).toHaveBeenCalled();
});
