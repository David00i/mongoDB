const bcrypt = require("bcryptjs")

const passwordEnteredByUser = "kdRNBqjaKlgrY74"
const hash = "$2a$10$u/tytS0hbSYlvZocB1vAVemUHwyXPSUdB9fw24u8P2/YMn.Vi2WPe"

bcrypt.compare(passwordEnteredByUser, hash, function(error, isMatch) {
  if (error) {
    throw error
  } else if (!isMatch) {
    console.log("Password doesn't match!")
  } else {
    console.log("Password matches!")
  }
})