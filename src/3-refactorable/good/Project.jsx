// NPM Packages
import { useState } from "react";

// Project files
import Cart from "./components/Cart";
import CurrencySelector from "./components/CurrencySelector";
import InventoryTable from "./components/InventoryTable";
import inventory from "./components/inventory";
import CurrencyConverter from "./scripts/currency-converter";
import { CartProvider } from "./state/CartProvider";

export default function Project() {
  // Local state
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
    <CartProvider>
      <div>
        <h2>3 Refactorable Good</h2>
        <CurrencySelector
          localCurrency={localCurrency}
          setLocalCurrency={setLocalCurrency}
        />
        <InventoryTable
          currencyConverter={new CurrencyConverter(currencyConversions)}
          inventory={inventory}
          localCurrency={localCurrency}
        />
        <Cart
          currencyConverter={new CurrencyConverter(currencyConversions)}
          inventory={inventory}
          localCurrency={localCurrency}
        />
      </div>
    </CartProvider>
  );
}
