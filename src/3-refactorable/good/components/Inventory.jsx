// NPM Packages
import PropTypes from "prop-types";

// Project files
import { useCart } from "../state/CartProvider";

export default function Inventory(props) {
  const { currencyConverter, inventory, localCurrency } = props;

  // Global state
  const { dispatch } = useCart();

  return (
    <table style={{ width: "100%" }}>
      <tbody>
        <tr>
          <th>Product</th>
          <th>Image</th>
          <th>Description</th>
          <th>Price</th>
          <th>Cart</th>
        </tr>

        {inventory.map((item) => (
          <tr key={item.id}>
            <td>{item.product}</td>
            <td>
              <img src={item.image} alt="" />
            </td>
            <td>{item.description}</td>
            <td>
              {currencyConverter.convert(
                item.price,
                item.currency,
                localCurrency
              )}
            </td>
            <td>
              <button
                onClick={() => dispatch({ type: "add", itemId: item.id })}
              >
                Add to Cart
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Inventory.propTypes = {
  currencyConverter: PropTypes.object.isRequired,
  inventory: PropTypes.array.isRequired,
  localCurrency: PropTypes.string.isRequired,
};
