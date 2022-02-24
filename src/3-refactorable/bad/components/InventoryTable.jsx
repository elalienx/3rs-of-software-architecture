// NPM package
import PropTypes from "prop-types";

// Project files
import { useCart } from "../state/CartProvider";

export default function InventoryTable({
  currencyConverter,
  inventory,
  localCurrency,
}) {
  const { addToCartById } = useCart();

  // Methods
  function onAddToCart(itemId) {
    addToCartById(itemId);
  }

  // Components
  const InventoryRows = inventory.map((item) => (
    <tr key={item.id}>
      <td>{item.product}</td>
      <td>
        <img src={item.image} alt="" />
      </td>
      <td>{item.description}</td>
      <td>
        {currencyConverter.convert(item.price, item.currency, localCurrency)}
      </td>
      <td>
        <button onClick={() => onAddToCart(item.id)}>Add to Cart</button>
      </td>
    </tr>
  ));

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Image</th>
          <th>Description</th>
          <th>Price</th>
          <th>Cart</th>
        </tr>
      </thead>
      <tbody>{InventoryRows}</tbody>
    </table>
  );
}

InventoryTable.propType = {
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
