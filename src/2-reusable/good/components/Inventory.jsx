export default function Inventory({
  currencyConverter,
  inventory,
  localCurrency,
}) {
  return (
    <div>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Image</th>
            <th>Description</th>
            <th>Price</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
