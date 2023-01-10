// Project files
import InventoryRow from "./InventoryRow";

export default function InventoryTable({ inventory, localCurrency }) {
  // Components
  const InventoryRows = inventory.map((item) => (
    <InventoryRow key={item.id} item={item} localCurrency={localCurrency} />
  ));

  return (
    <table style={{ width: "100%" }}>
      <tbody>
        <tr>
          <th>Product</th>
          <th>Image</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
        {InventoryRows}
      </tbody>
    </table>
  );
}
