// Project file
import currencyConverter from "../scripts/currencyConverter";

export default function InventoryRow({ item, localCurrency }) {
  const { product, image, description, price, currency } = item;

  return (
    <tr>
      <td>{product}</td>
      <td>
        <img src={image} alt="" />
      </td>
      <td>{description}</td>
      <td>{currencyConverter(price, currency, localCurrency)}</td>
    </tr>
  );
}
