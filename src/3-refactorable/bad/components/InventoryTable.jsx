// Project files
import { useCart } from "../state/CartContext";

export default function InventoryTable({
  currencyConverter,
  inventory,
  localCurrency,
}) {
  // Global state
  const { addToCart } = useCart();

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
        <button onClick={() => addToCart(item.id)}>Add to Cart</button>
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
