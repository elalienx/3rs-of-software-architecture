// NPM packages
import { useEffect, useState } from "react";

export default function Project() {
  // Local state
  const [localCurrency, setLocalCurrency] = useState("usd");
  const [exchangeRate, setExhangeRate] = useState({ usd: { usd: 1 } });

  // Properties
  const inventory = [
    {
      id: 1,
      product: "Flashlight goood!!",
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
  ];
  const currencySymbols = {
    usd: "$",
    rupee: "₹",
    yuan: "元",
  };

  // Methods
  useEffect(() => {
    // to simulate getting the echange from a external API
    const exchangeRate = { usd: { rupee: 66.78, yuan: 6.87, usd: 1 } };

    setExhangeRate(exchangeRate);
  }, []);

  function onSelectCurrency(event) {
    setLocalCurrency(event.target.value);
  }

  function convertCurrency(amount, fromCurrency, toCurrency) {
    const convertedCurrency = amount * exchangeRate[fromCurrency][toCurrency];

    return currencySymbols[toCurrency] + convertedCurrency;
  }

  // Components
  const InventoryRows = inventory.map((item) => (
    <tr key={item.id}>
      <td>{item.product}</td>
      <td>
        <img src={item.image} alt="" />
      </td>
      <td>{item.description}</td>
      <td>{convertCurrency(item.price, item.currency, localCurrency)}</td>
    </tr>
  ));

  return (
    <div>
      <h2>2 Reusable Bad</h2>

      {/* Currency selector */}
      <label>
        Currency:
        <select onChange={onSelectCurrency} value={localCurrency}>
          <option value="usd">USD</option>
          <option value="rupee">Rupee</option>
          <option value="yuan">Yuan</option>
        </select>
      </label>

      {/* Inventory */}
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Image</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
          {InventoryRows}
        </tbody>
      </table>
    </div>
  );
}
