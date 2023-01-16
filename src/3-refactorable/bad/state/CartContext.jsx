// Node module
import { createContext, useContext, useReducer } from "react";

// 1 Import reducer
// Project files
import cartReducer from "./cartReducer";

// 2 Create the Context (for point #3)
const Context = createContext(null);

// 3 Create the Provider for the parent (Project.jsx)
export function CartProvider({ children }) {
  // State
  const [cart, dispatch] = useReducer(cartReducer, []);

  // Properties
  const value = { cart, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

// 4 Create the custom hook (for the children)
export function useCart() {
  const context = useContext(Context);

  // safeguard
  if (!context) throw new Error("useCart must be used within a <CartProvider>");

  return context;
}
