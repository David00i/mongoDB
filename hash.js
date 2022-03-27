const bcrypt = require("bcryptjs")
const saltRounds = 10;

let faker = require('./faker.js');
const password = faker.password;
bcrypt.genSalt(saltRounds, function (saltError, salt) {
  if (saltError) {
    throw saltError
  } else {
    bcrypt.hash(password, salt, function(hashError, hash) {
      if (hashError) {
        throw hashError
      } else {
        return hash
        //$2a$10$FEBywZh8u9M0Cec/0mWep.1kXrwKeiWDba6tdKvDfEBjyePJnDT7K
      }
    })
  }
})
const convert = bcrypt.hashSync(password, saltRounds) 
console.log("The hash  password : ", convert);
module.exports = {convert}