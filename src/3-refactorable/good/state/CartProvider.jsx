// NPM Packages
import React, { useReducer } from "react";

// Project files
import CartReducer from "./cart-reducer";

export const CartContext = React.createContext(null);

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
