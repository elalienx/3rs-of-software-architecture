// NPM Packages
import PropTypes from "prop-types";

// Project files
import { useCart } from "../state/CartProvider";

export default function Cart({ currencyConverter, inventory, localCurrency }) {
  // Global state
  const { cart, dispatch } = useCart();

  console.log("Cart.jsx cart", cart);

  // Components
  const TableRows = cart.map((itemId, index) => (
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
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{TableRows}</tbody>
        </table>
      )}
      <button onClick={() => dispatch({ type: "empty" })}>Empty cart</button>
    </div>
  );
}

Cart.propTypes = {
  currencyConverter: PropTypes.object.isRequired,
  inventory: PropTypes.array.isRequired,
  localCurrency: PropTypes.string.isRequired,
};
