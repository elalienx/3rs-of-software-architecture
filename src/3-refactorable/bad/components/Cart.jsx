// NPM packages
import PropTypes from "prop-types";

// Project files
import { useCart } from "../state/CartProvider";

export default function Cart({ currencyConverter, inventory, localCurrency }) {
  const { cart, emptyCart } = useCart();

  // Methods
  function onEmptyCart() {
    emptyCart();
  }

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

Cart.propTypes = {
  currencyConverter: PropTypes.object.isRequired, // Classes in JS are objects behind the scenes
  inventory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      product: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
  localCurrency: PropTypes.string.isRequired,
};
