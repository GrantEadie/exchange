export default class Convert{
  constructor(amount, currency, inputCurrency) {
    this.amount = amount;
    this.currency = currency;
    this.inputCurrency = inputCurrency
  }

  fromDollars() {
    return (this.amount * this.currency).toFixed(2);
  }

  fromAnything() {
    return (this.amount * (this.currency / this.inputCurrency).toFixed(2));
  }
}