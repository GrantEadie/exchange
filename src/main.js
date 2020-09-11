import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './currency.js'
import Convert from './convert.js'

function clearFields() {
  $('#amount').val("");
}

$(document).ready(function() {
  $('#getSubmit').click(function() {
    let amount = $('#amount').val();
    let conversionRates = {};
    clearFields();

    let promise = Currency.getCurrency();
    promise.then(function(response) {
      const body = JSON.parse(response);
      for (const key in body.conversion_rates) {
        conversionRates[key] = body.conversion_rates[key];
      }
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
    let conversion = new Convert(amount, conversionRates);
    console.log(conversion);
    console.log(conversionRates);
  });
});