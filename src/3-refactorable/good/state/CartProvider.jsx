// NPM Packages
import React, { useContext, useReducer } from "react";

// Project files
import CartReducer from "./cart-reducer";

// Properties
const Context = React.createContext(null);

export function CartProvider({ children, initialState = [] }) {
  // Global state
  const [cart, dispatch] = useReducer(CartReducer, initialState);

  // Properties
  const contextValue = { cart, dispatch };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export function useCart() {
  const context = useContext(Context);

  if (!context) throw new Error("useCart must be used within a <CartProvider>");

  return context;
}
