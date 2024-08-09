const faker = require('faker');

function generateRandomProductName() {
    return faker.commerce.productName();
}

module.exports = { generateRandomProductName };