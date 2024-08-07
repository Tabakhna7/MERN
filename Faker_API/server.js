
const express = require('express');
const { faker } = require('@faker-js/faker');


const app = express();
const port = 3006;


function createUser() {
  return {
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}


function createCompany() {
  return {
    _id: faker.datatype.uuid(),
    name: faker.company.name(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  };
}


app.get('/api/users/new', (req, res) => {
  res.json(createUser());
});

app.get('/api/companies/new', (req, res) => {
  res.json(createCompany());
});

app.get('/api/user/company', (req, res) => {
  res.json({
    user: createUser(),
    company: createCompany(),
  });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
