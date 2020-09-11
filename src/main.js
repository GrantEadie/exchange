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
    // let amount = $('#amount').val();
    clearFields();

    let promise = Currency.getCurrency();
    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
    let conversion = new Convert;
    console.log((conversion.getConvert));
  });
});