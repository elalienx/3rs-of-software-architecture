export default function Project() {
  const localCurrency = "usd";
  const inventory = [
    {
      id: 1,
      product: "Flashlight",
      image: "/flashlight.jpg",
      description: "A really great flashlight",
      price: 100,
      currency: "usd",
    },
    {
      id: 2,
      product: "Tin can",
      image: "/tin_can.jpg",
      description: "Pretty much what you would expect from a tin can",
      price: 32,
      currency: "usd",
    },
    {
      id: 3,
      product: "Cardboard Box",
      image: "/cardboard_box.png",
      description: "It holds things",
      price: 5,
      currency: "usd",
    },
  ];

  // Components (to remove the nesting)
  const InventoryRows = inventory.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.product}</td>
        <td>
          <img src={item.image} alt="" />
        </td>
        <td>{item.description}</td>
        <td>{item.price}</td>
      </tr>
    );
  });

  return (
    <div>
      <h2>1 Redable Good</h2>
      <p>Global currency: {localCurrency}</p>

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
    </div>
  );
}
