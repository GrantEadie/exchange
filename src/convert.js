export default class Convert{
  constructor(amount, currency, inputtedCurrency) {
    this.amount = amount;
    this.currency = currency;
    this.inputtedCurrency = inputtedCurrency;
  }

  fromDollars() {
    return this.currency;
  }
}
