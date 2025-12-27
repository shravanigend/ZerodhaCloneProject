require("dotenv").config();
const jwt = require("jsonwebtoken");   // ❗ THIS LINE WAS MISSING

module.exports.createSecretToken = (id) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is missing in .env");
  }

  return jwt.sign(
    { id },
    process.env.JWT_SECRET,
    { expiresIn: "3d" }
  );
};
// require("dotenv").config();
// const jwt = require("jsonwebtoken");

// module.exports.createSecretToken = (id) => {
//   return jwt.sign({ id }, process.env.TOKEN_KEY, {
//     expiresIn: 3 * 24 * 60 * 60,
//   });
// };
// const jwt = require("jsonwebtoken");

// module.exports.createSecretToken = (id) => {
//   if (!process.env.JWT_SECRET) {
//     throw new Error("JWT_SECRET is not defined in .env");
//   }

//   return jwt.sign(
//     { id },
//     process.env.JWT_SECRET,
//     { expiresIn: "3d" }
//   );
// };
