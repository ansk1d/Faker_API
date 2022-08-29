const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;


class User {
    constructor() {
        this._id = faker.datatype.number(100)
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password(8)
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.number(100);
        this.name = faker.company.name();
        this.street = faker.address.street();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}


app.get("/api/users/new", (req, res) => {
    res.json(new User());
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});

app.get("/api/companies/user", (req, res) => {
    res.json(
        {
            Company: new Company(),
            User: new User()
        });
});



app.listen(port, () => console.log(`Listening on port: ${port}`));