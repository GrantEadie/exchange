import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './currency.js'
import Convert from './convert.js'

function clearFields() {
  $('#amount').val("");
  $('#currency1').val("");
}

$(document).ready(function() {
  $('#getSubmit').click(function() {
    let amount = $('#amount').val();
    let inputtedCurrency = $('#currency1').val();
    let conversionRate;
    clearFields();

    let promise = Currency.getCurrency();
    promise.then(function(response) {
      const body = JSON.parse(response);
      
      conversionRate = body.conversion_rates[inputtedCurrency];
      let conversion = new Convert(amount, conversionRate);
      $('.showOutput').text((conversion.fromDollars()) + " " + inputtedCurrency);

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});