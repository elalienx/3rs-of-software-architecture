// Node module
import { createContext, useContext, useState } from "react";

// 1 Create the Context (for point #3)
const Context = createContext(null);

// 2 Create the Provider for the parent (Project.jsx)
export function CartProvider({ children }) {
  // State
  const [cart, setCart] = useState([]);

  // Properties
  const value = { cart, addToCart, emptyCart };

  // Methods
  function addToCart(newItem) {
    setCart([...cart, newItem]);
  }

  function emptyCart() {
    setCart([]);
  }

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

// 3 Create the custom hook (for the children)
export function useCart() {
  const context = useContext(Context);

  // safeguard
  if (!context) throw new Error("useCart must be used within a <CartProvider>");

  return context;
}
