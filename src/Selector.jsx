export default function Selector({ index, onChange }) {
  return (
    <nav>
      Choose the project version:
      <select onChange={(event) => onChange(event.target.value)} value={index}>
        <option value={0}>Readable Bad</option>
        <option value={1}>Readable Good</option>
        <option value={2}>Reusable Bad</option>
        <option value={3}>Reusable Good</option>
        <option value={4}>Refactorable Bad</option>
        <option value={5}>Refactorable Good</option>
      </select>
    </nav>
  );
}
