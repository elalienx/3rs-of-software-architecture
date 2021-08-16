// NPM Packages
import React, { useContext, useReducer } from "react";

// Project files
import CartReducer from "./cart-reducer";

// Properties
const CartContext = React.createContext(null);

export function CartProvider(props) {
  // Global state
  const [cart, dispatch] = useReducer(CartReducer, []);

  // Properties
  const contextValue = { cart, dispatch };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) throw new Error("useList must be used within a <ListProvider>");

  return context;
}
