export default function CurrencySelector({ localCurrencyState }) {
  const [localCurrency, setLocalCurrency] = localCurrencyState;

  // Methods
  function onSelectCurrency(event) {
    setLocalCurrency(event.target.value);
  }

  return (
    <label>
      Currency:
      <select onChange={onSelectCurrency} value={localCurrency}>
        <option value="usd">USD</option>
        <option value="rupee">Rupee</option>
        <option value="yuan">Yuan</option>
      </select>
    </label>
  );
}
