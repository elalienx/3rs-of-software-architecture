export default function CurrencySelector({ localCurrency, setLocalCurrency }) {
  // Methods
  function onSelectCurrency(event) {
    const currency = event.target.value;

    setLocalCurrency(currency);
  }

  return (
    <label>
      Currency:
      <select
        className="u-full-width"
        onChange={onSelectCurrency}
        value={localCurrency}
      >
        <option value="usd">USD</option>
        <option value="rupee">Rupee</option>
        <option value="yuan">Yuan</option>
      </select>
    </label>
  );
}
