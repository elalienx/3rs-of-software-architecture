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
  const values = { cart, setCart };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

// 2. For each children that wants to utilize the global state
export function useCart() {
  const context = useContext(Context);
  const errorText =
    "You cannot use useCart() before you put the <CartProvider/> inside the parent component";

  // Safeguard
  if (!context) throw new Error(errorText);

  return context;
}
