/**
 * CONCEPTS:
 * State = Data that React can "react"/track.
 * Global state = Same but available everywhere.
 */

// NPM Package
import { createContext, useContext, useState } from "react";

// Properties
const Context = createContext(null);

// 1. Is for the parent component that wants to share the global state with its children
export function CartProvider({ children }) {
  // State
  const [cart, setCart] = useState([]);

  // Properties
  const values = { cart, addToCartById, emptyCart };

  // Methods
  function addToCartById(id) {
    setCart([...cart, id]);
  }

  function emptyCart() {
    setCart([]);
  }

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

// 2. For each children that wants to utilize the global state
export function useCart() {
  const context = useContext(Context);
  const errorText =
    "You cannot utilize the useCart() hook before you put the <CartProvider/> Context API inside the parent component";

  // Safeguard
  if (!context) throw new Error(errorText);

  return context;
}
