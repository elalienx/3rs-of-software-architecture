import { useState } from "react";
import CurrencyConverter from "./currency-converter";
import Inventory from "./Inventory";
import CurrencySelector from "./CurrencySelector";

export default function App() {
  const [inventory, setInventory] = useState([
    {
      id: 1,
      product: "Flashlight",
      image: "/flashlight.jpg",
      description: "A really great flashlight",
      price: 100,
      currency: "usd",
    },
    {
      id: 2,
      product: "Tin can",
      image: "/tin_can.jpg",
      description: "Pretty much what you would expect from a tin can",
      price: 32,
      currency: "usd",
    },
    {
      id: 3,
      product: "Cardboard Box",
      image: "/cardboard_box.png",
      description: "It holds things",
      price: 5,
      currency: "usd",
    },
  ]);
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
      <h2>2 Good</h2>
      <p>Global currency: {localCurrency}</p>

      <CurrencySelector
        localCurrency={localCurrency}
        setLocalCurrency={setLocalCurrency}
      />
      <Inventory
        currencyConverter={new CurrencyConverter(currencyConversions)}
        inventory={inventory}
        localCurrency={localCurrency}
      />
    </div>
  );
}
