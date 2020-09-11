export default class Convert{
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  fromDollars() {
    return (this.amount * this.currency).toFixed(2);
  }
}
