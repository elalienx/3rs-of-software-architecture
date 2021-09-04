// NPM Packages
import React, { useContext, useReducer } from "react";

// Project files
import cartReducer from "./cart-reducer";

// Properties
const CartContext = React.createContext(null); // can be renamed to Context REFACTOR

export function CartProvider({ children }) {
  // Global state
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={(cart, dispatch)}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) throw new Error("useCart must be used within a <CartProvider>");

  return context;
}
