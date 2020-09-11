import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './currency.js'

function clearFields() {
  $('#amount').val("");
}

$(document).ready(function() {
  $('#getSubmit').click(function() {
    let date = $('#amount').val();
    clearFields();
    
    let promise = Currency.getCurrency(date);
    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});