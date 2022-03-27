const { faker } = require('@faker-js/faker');
const randomName = faker.name.findName();             // Rowan Nikolaus
const randomEmail = faker.internet.email();           // Kassandra.Haley@erich.biz
const randomPhoneNumber = faker.phone.phoneNumber();  // (279) 329-8663 x30233
const password = faker.internet.password();           // qY4!qY4!qY4!qY4!

console.log("\nThe faker name     : ",randomName);
console.log("The faker email    : ",randomEmail);
console.log("The faker phone    : ",randomPhoneNumber);
console.log("The faker password : ",password);

module.exports = {randomName, randomEmail, randomPhoneNumber, password};