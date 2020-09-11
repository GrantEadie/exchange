import Currency from './currency.js'

export default class Convert{
  
  getBody() {
    let promise = Currency.getCurrency();
    promise.then(function(response) {
      const body = JSON.parse(response);
      return body; 
    }, function(error) {
      return `There was an error processing your request: ${error}`;
    })
  }

  getConvert() {
    let conversion = this.getBody()
    return conversion;
  }


}
