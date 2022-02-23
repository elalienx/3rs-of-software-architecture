// NPM Packages
import { useState } from "react";

// Project files
import Cart from "./components/Cart";
import CurrencySelector from "./components/CurrencySelector";
import InventoryTable from "./components/InventoryTable";
import inventory from "./data/inventory.json";
import CurrencyConverter from "./scripts/currency-converter";

export default function Project() {
  // Local state
  const [cart, setCart] = useState([]); // state acting as GLOBAL state (bad)
  const [localCurrency, setLocalCurrency] = useState("usd");

  // Most likely we would fetch this from an external source if this were a real app
  const currencyConversions = {
    usd: {
      rupee: 66.78,
      yuan: 6.87,
      usd: 1,
    },
  };

  return (
    <div>
      <h2>3 Refactorability Bad</h2>
      <CurrencySelector
        localCurrency={localCurrency}
        setLocalCurrency={setLocalCurrency}
      />
      <InventoryTable
        cartState={[cart, setCart]}
        currencyConverter={new CurrencyConverter(currencyConversions)}
        inventory={inventory}
        localCurrency={localCurrency}
      />
      <Cart
        cartState={[cart, setCart]}
        currencyConverter={new CurrencyConverter(currencyConversions)}
        inventory={inventory}
        localCurrency={localCurrency}
      />
    </div>
  );
}
