// NPM Packages
import PropTypes from "prop-types";

export default function CurrencySelector({ localCurrency, setLocalCurrency }) {
  return (
    <label>
      Currency:
      <select
        data-testid="select"
        onChange={(event) => setLocalCurrency(event.target.value)}
        value={localCurrency}
      >
        <option value="usd">USD</option>
        <option value="rupee">Rupee</option>
        <option value="yuan">Yuan</option>
      </select>
    </label>
  );
}

CurrencySelector.propTypes = {
  localCurrency: PropTypes.string.isRequired,
  setLocalCurrency: PropTypes.func.isRequired,
};
