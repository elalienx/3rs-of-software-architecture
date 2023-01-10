const currencyConversions = {
  usd: {
    rupee: 66.78,
    yuan: 6.87,
    usd: 1,
  },
};
const currencySymbols = {
  usd: "$",
  rupee: "₹",
  yuan: "元",
};

export default function currencyConverter(amount, fromCurrency, toCurrency) {
  const convertedCurrency =
    amount * currencyConversions[fromCurrency][toCurrency];

  return currencySymbols[toCurrency] + convertedCurrency;
}
