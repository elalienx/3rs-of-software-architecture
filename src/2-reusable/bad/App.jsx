import { useState } from "react";

export default function Inventory() {
  const [localCurrency, setLocalCurrency] = useState("usd");
  const [inventory, setInventory] = useState([
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
  ]);

  const currencyConversions = {
    usd: {
      rupee: 66.78,
      yuan: 6.87,
      usd: 1,
    },
  };
  const currencySymbols = {
    usd: "$",
    rupee: "₹",
    yuan: "元",
  };

  function onSelectCurrency(event) {
    setLocalCurrency(event.target.value);
  }

  function convertCurrency(amount, fromCurrency, toCurrency) {
    const convertedCurrency =
      amount * currencyConversions[fromCurrency][toCurrency];

    return currencySymbols[toCurrency] + convertedCurrency;
  }

  return (
    <div>
      <h2>2 Bad</h2>
      <label>
        Currency:
        <select
          className="u-full-width"
          onChange={onSelectCurrency}
          value={localCurrency}
        >
          <option value="usd">USD</option>
          <option value="rupee">Rupee</option>
          <option value="yuan">Yuan</option>
        </select>
      </label>

      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Image</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.product}</td>
              <td>
                <img src={item.image} alt="" />
              </td>
              <td>{item.description}</td>
              <td>
                {convertCurrency(item.price, item.currency, localCurrency)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
