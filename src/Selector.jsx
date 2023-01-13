export default function Selector({ data, index, onChange }) {
  // Components
  const Options = data.map((item, index) => (
    <option key={index} value={index}>
      {item}
    </option>
  ));

  return (
    <select onChange={(event) => onChange(event.target.value)} value={index}>
      {Options}
    </select>
  );
}
