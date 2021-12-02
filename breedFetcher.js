
const request = require('request');
const input = process.argv.slice(2);
const breed = input[0];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

if (input[0] > 2) {
  request(url, (error, response, body) => {
    if (response.statusCode !== error) {
      return error = console.log(`Could not connect to the server. statusCode ${response.statusCode}`, response);
    }
    const data = JSON.parse(body);
    if (body.length > 0) {
      const cat = data[0].name;
      if (cat !== breed) {
        console.log("Breed was not found!");
      }
      if (cat === breed) {
        const description = data[0].description;
        console.log(description);
      }
    }

  });

}