// NPM packages
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

// Project files
import { CartProvider } from "../state/CartProvider";
import Inventory from "./Inventory";

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
const dispatch = jest.fn();
useDispatch.mockReturnValue(jest.fn());

const changeCurrency = jest.fn();
const currencyConverter = {
  convert: jest.fn(),
};

test("should render Inventory without crashing", () => {
  // Arrange
  render(
    <CartProvider>
      <Inventory
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
      <Inventory
        currencyConverter={currencyConverter}
        inventory={inventory}
        localCurrency={localCurrency}
      />
    </CartProvider>
  );

  // Act
  const buttonElement = screen.getByText(/add to cart/i);
  fireEvent.click(buttonElement);

  // Assert
  expect(dispatch).toHaveBeenCalled();
});
