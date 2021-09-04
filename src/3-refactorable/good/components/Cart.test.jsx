// NPM packages
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Project files
import Cart from "./cart";
import { CartProvider, initialState } from "../state/CartProvider";

const localCurrency = "usd";
const inventory = [
  {
    id: 0,
    product: "Flashlight",
    img: "/flashlight.jpg",
    desc: "A really great flashlight",
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
  currencyConverter.convert = function () {
    return "$" + inventory[1].price;
  };

  render(
    <CartProvider>
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
  expect(product).toBeInTheDocument();
  expect(price).toBeInTheDocument();
});
