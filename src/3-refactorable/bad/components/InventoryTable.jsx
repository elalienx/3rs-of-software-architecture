// Project files
import { useCart } from "../state/CartContext";

export default function InventoryTable({
  currencyConverter,
  inventory,
  localCurrency,
}) {
  // Global state
  const { cart, setCart } = useCart();

  // Methods
  function onAddToCart(itemId) {
    // refactor to remove setCart, otherwise the context api starts to have side effects
    setCart([...cart, itemId]);
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
