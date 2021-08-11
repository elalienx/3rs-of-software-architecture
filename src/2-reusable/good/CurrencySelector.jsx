import React from "react";

export default function CurrencySelector({ localCurrency, setGlobalCurrency }) {
  function onSelectCurrency(event) {
    const currency = event.target.value;

    setGlobalCurrency(currency);
  }

  return (
    <div>
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
    </div>
  );
}

// CurrencySelector.propTypes = {
//   setGlobalCurrency: React.PropTypes.func.isRequired,
//   localCurrency: React.PropTypes.string.isRequired,
// };
