const faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('coffee').del()
    .then(function () {
      var coffeeArray = [];
      for (var i = 0; i <= 10; i++) {
        coffeeArray.push(
        knex('coffee').insert({
          name: faker.commerce.product(),
          roaster: faker.company.companyName(),
          origin: faker.address.county(),
          roast: faker.company.companyName(),
          caffeine: faker.random.number({min:1, max:100}),
          decaf: faker.random.boolean(),
          price: parseInt(faker.commerce.price()),
          quantity: faker.random.number({min:1, max:100})
        })
        );
      }
      return Promise.all(coffeeArray);
    });
};
