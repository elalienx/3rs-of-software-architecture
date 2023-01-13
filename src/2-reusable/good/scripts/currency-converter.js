export default class CurrencyConverter {
  constructor(exchangeRate) {
    this.exchangeRate = exchangeRate;
    this.symbols = {
      usd: "$",
      rupee: "₹",
      yuan: "元",
    };
  }

  convert(amount, fromCurrency, toCurrency) {
    const conversion = amount * this.exchangeRate[fromCurrency][toCurrency];

    return this.symbols[toCurrency] + conversion;
  }
}
