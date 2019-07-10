// npm i --save faker
// npm i --save json-server
const faker = require('faker');
const fs = require('fs');

function buildCart(){
  let cart = []

  for (let i = 0; i < 10; i++){
    let orderId = faker.finance.account();
    let product = faker.commerce.product();
    let company = faker.company.companyName();
    let package = faker.random.number();
    let quantity = faker.random.number();
    let totalUnits = faker.random.number();
    let price = faker.commerce.price();

    cart.push({
      "orderId": orderId,
      "product": product,
      "company": company,
      "package": package,
      "quantity": quantity,
      "totalUnits": totalUnits,
      "price": price,
    });
  }
  return { "data":cart }
}

let dataObj = buildCart();

// Writes the resulting data to db.json
fs.writeFileSync('db.json', JSON.stringify(dataObj, null, '\t'));

// To see resulting JSON and create db.json file run the following command:

// json-server --watch <this file's name> -- port <any available port>
