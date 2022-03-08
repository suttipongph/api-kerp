const jwt = require("jsonwebtoken");
const randtoken = require("rand-token");
const constants = require("../api/shared/constants/shared_constants");

// create json web token
const maxAge = constants.maxAge;
const createToken = (id) => {
  return jwt.sign({ id }, constants.secret_key, {
    expiresIn: maxAge,
  });
};
const createRefresh = (id) => {
  const refreshToken = randtoken.uid(256);
  return (refreshTokens[refreshToken] = id);
};
(module.exports = createToken), createRefresh;
