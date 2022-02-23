export default function Selector({ index, onChange }) {
  return (
    <nav>
      Choose the project version:
      <select onChange={(event) => onChange(event.target.value)} value={index}>
        <option value={0}>🔵 1 Readable Bad</option>
        <option value={1}>🔵 1 Readable Good</option>
        <option value={2}>🟢 2 Reusable Bad</option>
        <option value={3}>🟢 2 Reusable Good</option>
        <option value={4}>🔴 3 Refactorable Bad</option>
        <option value={5}>🔴 3 Refactorable Good</option>
      </select>
    </nav>
  );
}
