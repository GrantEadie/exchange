export default class Currency {  
  static getCurrency() {
    return new Promise(function() {
      var data = null;

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
          console.log(this.responseText);
        }
      });

      xhr.open("GET", "https://realty-mole-property-api.p.rapidapi.com/zipCodes/29611");
      xhr.setRequestHeader("x-rapidapi-host", "realty-mole-property-api.p.rapidapi.com");
      xhr.setRequestHeader("x-rapidapi-key", "2fe92dd955mshf98e6fe15bfa035p184862jsna0498f36992e");

      xhr.send(data);
    });
  }
}