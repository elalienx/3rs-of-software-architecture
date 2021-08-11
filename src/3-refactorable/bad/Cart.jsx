import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Cart(props) {
  const { currencyConverter, inventory, localCurrency } = props;

  const [cart, setCart] = useState([]);

  // Repeatedly sync global cart to local cart, BAD!
  useEffect(() => {
    window.setInterval(() => setCart(window.cart), 1000);
  }, [setCart]);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Nothing in the cart</p>
      ) : (
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <th>Product</th>
              <th>Price</th>
            </tr>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{inventory[item.id].product}</td>
                <td>
                  {currencyConverter.convert(
                    inventory[item.id].price,
                    inventory[item.id].currency,
                    localCurrency
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

Cart.propTypes = {
  currencyConverter: PropTypes.object.isRequired,
  inventory: PropTypes.array.isRequired,
  localCurrency: PropTypes.string.isRequired,
};
