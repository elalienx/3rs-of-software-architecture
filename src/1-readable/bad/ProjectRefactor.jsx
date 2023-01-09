import Inventory from "./inventory.json";
import Item from "./Item";

// Project
export default function Project() {
  const currency = "usd";

  // Components
  const Items = Inventory.map((item) => <Item key={item.id} item={item} />);

  return (
    <div>
      <h2>1 Readable Bad</h2>
      <p>Global currency: {currency}</p>

      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Image</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
          {Items}
        </tbody>
      </table>
    </div>
  );
}
