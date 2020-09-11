export default class Convert{
  constructor(amount, currency, inputCurrency) {
    this.amount = amount;
    this.currency = currency;
    this.inputCurrency = inputCurrency
  }

  fromAnything() {
    return (this.amount * (this.currency / this.inputCurrency).toFixed(2));
  }
}