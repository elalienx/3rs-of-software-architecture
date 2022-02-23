// NPM Packages
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Cart({ currencyConverter, inventory, localCurrency }) {
  // Local state
  const [cart, setCart] = useState([]);

  // Methods
  function onEmptyCart() {
    window.cart = [];

    setCart([...window.cart]);
  }

  useEffect(() => {
    setInterval(() => setCart([...window.cart]), 1000); // Repeatedly sync global cart to local cart, BAD!
  }, [setCart]);

  // Components
  const CartRows = cart.map((itemId, index) => (
    <tr key={index}>
      <td>{inventory[itemId - 1].product}</td>
      <td>
        {currencyConverter.convert(
          inventory[itemId - 1].price,
          inventory[itemId - 1].currency,
          localCurrency
        )}
      </td>
    </tr>
  ));

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 && <p>Nothing to show</p>}
      {cart.length > 0 && (
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{CartRows}</tbody>
        </table>
      )}
      <button onClick={onEmptyCart}>Empty cart</button>
    </div>
  );
}
