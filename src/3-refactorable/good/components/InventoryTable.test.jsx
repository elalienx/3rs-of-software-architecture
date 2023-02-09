// NPM packages
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

// Project files
import { CartProvider } from "../state/CartProvider";
import cartReducer from "../state/cart-reducer";
jest.mock("../state/cart-reducer");

import InventoryTable from "./InventoryTable";

// Initial state
const localCurrency = "usd";
const inventory = [
  {
    id: 0,
    product: "Flashlight",
    image: "/flashlight.jpg",
    description: "A really great flashlight",
    price: 100,
    currency: "usd",
  },
];
const currencyConverter = {
  convert: jest.fn(),
};

test("should render Inventory without crashing", () => {
  // Arrange
  render(
    <CartProvider>
      <InventoryTable
        currencyConverter={currencyConverter}
        inventory={inventory}
        localCurrency={localCurrency}
      />
    </CartProvider>
  );

  // Assert
  const productTableHeader = screen.getByText("Product");
  const imageTableHeader = screen.getByText("Image");
  const descriprionTableHeader = screen.getByText("Description");
  const priceTableHeader = screen.getByText("Price");
  const cartTableHeader = screen.getByText("Cart");

  // Act
  expect(productTableHeader).toBeInTheDocument();
  expect(imageTableHeader).toBeInTheDocument();
  expect(descriprionTableHeader).toBeInTheDocument();
  expect(priceTableHeader).toBeInTheDocument();
  expect(cartTableHeader).toBeInTheDocument();
});

test("should have a working add to cart button", () => {
  // Arrange
  render(
    <CartProvider>
      <InventoryTable
        currencyConverter={currencyConverter}
        inventory={inventory}
        localCurrency={localCurrency}
      />
    </CartProvider>
  );

  // Act
  const buttonElement = screen.getByText("Add to Cart");
  fireEvent.click(buttonElement);

  expect(cartReducer).toBeCalled();
});
