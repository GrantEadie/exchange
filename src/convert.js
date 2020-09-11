import Currency from './currency.js'

let promise = Currency.getCurrency(amount);
    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body);
    }, function(error) {
      return `There was an error processing your request: ${error}`;
    });