export default function Item({ item }) {
  const { product, description, image, price } = item;
  
  return (
    <tr key={index}>
      <td>{product}</td>
      <td>
        <img src={image} alt="" />
      </td>
      <td>{description}</td>
      <td>{price}</td>
    </tr>
  );
}
