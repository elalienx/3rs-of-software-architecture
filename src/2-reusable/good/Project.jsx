// NPM Packages
import { useState, useEffect } from "react";

// Project files
import CurrencySelector from "./components/CurrencySelector";
import InventoryTable from "./components/InventoryTable";
import inventory from "./data/inventory.json";
import CurrencyConverter from "./scripts/currency-converter";

export default function Project() {
  // Local state
  const [localCurrency, setLocalCurrency] = useState("usd");
  const [exchangeRate, setExhangeRate] = useState({ usd: { usd: 1 } });

  // Most likely we would fetch this from an external source if this were a real app
  useEffect(() => {
    // to simulate getting the echange from a external API
    const exchangeRate = { usd: { rupee: 66.78, yuan: 6.87, usd: 1 } };

    setExhangeRate(exchangeRate);
  }, []);

  return (
    <div>
      <h2>2 Reusable Good</h2>
      <CurrencySelector
        localCurrency={localCurrency}
        setLocalCurrency={setLocalCurrency}
      />
      <InventoryTable
        currencyConverter={new CurrencyConverter(exchangeRate)}
        inventory={inventory}
        localCurrency={localCurrency}
      />
    </div>
  );
}
