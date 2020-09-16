export default class Rentals {
  constructor() {
    var unirest = require("unirest");

    var req = unirest("GET", "https://realty-mole-property-api.p.rapidapi.com/rentalPrice");

    req.query({
      "compCount": "5",
      "squareFootage": "1600",
      "bathrooms": "2",
      "address": "5500 Grand Lake Drive%2C San Antonio%2C TX",
      "bedrooms": "4",
      "propertyType": "Single Family"
    });

    req.headers({
      "x-rapidapi-host": "realty-mole-property-api.p.rapidapi.com",
      "x-rapidapi-key": "2fe92dd955mshf98e6fe15bfa035p184862jsna0498f36992e",
      "useQueryString": true
    });


    req.end(function (res) {
      if (res.error) throw new Error(res.error);

      console.log(res.body);
    });
  }
}