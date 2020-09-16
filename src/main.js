import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './currency.js'
import Convert from './convert.js'
import Rentals from './test.js'

function clearFields() {
  $('#amount').val("");
}

console.log(Rentals);

console.log(Currency.getCurrency());

$(document).ready(function() {
  $('#getSubmit').click(function() {
    let amount = $('#amount').val();
    let outputCurrency = $('#currency1').val();
    let inputCurrency = $('#currencyInput').val();
    clearFields();

    let promise = Currency.getCurrency();
    promise.then(function(response) {
      const body = JSON.parse(response);
      
      let conversion = new Convert(amount, body.conversion_rates[outputCurrency], body.conversion_rates[inputCurrency]);
      $('.showOutput').text((conversion.fromAnything()) + " " + outputCurrency);

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});