import Currency from './currency.js'

export default class Convert{
getConvert() {
  let promise = Currency.getCurrency();
  promise.then(function(response) {
    const body = JSON.parse(response);
    return body; 
  }, function(error) {
    this.error = `There was an error processing your request: ${error}`;
  })
  }
}
