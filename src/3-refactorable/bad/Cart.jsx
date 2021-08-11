import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Cart(props) {
  const { currencyConverter, inventory, localCurrency } = props;

  const [cart, setCart] = useState([]);

  function onEmptyCart() {
    window.cart = [];

    setCart([...window.cart]);
  }

  // Repeatedly sync global cart to local cart, BAD!
  useEffect(() => {
    setInterval(() => {
      const updatedCart = [...window.cart];

      setCart(updatedCart);
    }, 1000);
  }, [setCart]);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 && <p>Nothing to show</p>}
      {cart.length > 0 && (
        <>
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <th>Product</th>
                <th>Price</th>
              </tr>
              {cart.map((itemId, index) => (
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
              ))}
            </tbody>
          </table>
          <button onClick={onEmptyCart}>Empty cart</button>
        </>
      )}
    </div>
  );
}

Cart.propTypes = {
  currencyConverter: PropTypes.object.isRequired,
  inventory: PropTypes.array.isRequired,
  localCurrency: PropTypes.string.isRequired,
};
