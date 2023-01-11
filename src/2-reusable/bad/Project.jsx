// NPM packages
import { useState } from "react";

// Project file
import CurrencySelector from "./component/CurrencySelctor";
import InventoryTable from "./component/InventoryTable";
import Inventory from "./data/inventory.json";

export default function Project() {
  // Local state
  const [localCurrency, setLocalCurrency] = useState("usd");

  return (
    <div>
      <h2>2 Reusable Bad</h2>
      <CurrencySelector
        localCurrency={localCurrency}
        setLocalCurrency={setLocalCurrency}
      />
      <InventoryTable inventory={Inventory} localCurrency={localCurrency} />
    </div>
  );
}
