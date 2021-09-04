// NPM packages
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Project files
import Cart from "./cart";
import { CartProvider } from "../state/CartProvider";

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

test("should render Cart without crashing", () => {
  // Arrange
  render(
    <CartProvider>
      <Cart
        currencyConverter={currencyConverter}
        inventory={inventory}
        localCurrency={localCurrency}
      />
    </CartProvider>
  );

  // Assert
  const titleElement = screen.getByText("Your Shopping Cart");

  // Act
  expect(titleElement).toBeInTheDocument();
});

test("should show all cart data in cart table", () => {
  // Arrange
  const cart = [1];
  currencyConverter.convert = function () {
    return "$" + inventory[0].price;
  };

  render(
    <CartProvider initialState={cart}>
      <Cart
        currencyConverter={currencyConverter}
        inventory={inventory}
        localCurrency={localCurrency}
      />
    </CartProvider>
  );

  // Act
  const productElement = screen.getByText("Flashlight");
  const priceElement = screen.getByText("$100");

  // Asert
  expect(productElement).toBeInTheDocument();
  expect(priceElement).toBeInTheDocument();
});
