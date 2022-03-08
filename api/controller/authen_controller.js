const authen_services = require("../services/authen_services");
const users = require("../shared/test_data/users");

//--Get list ---
const list = users;
//--Get ID ---

//--Create data ---

//--Update data ---

//--Delete data ---

//--Special Function ---

const checkUserAccount = async (req, res) => {
  let result = await authen_services.checkUseraccount(req, res);
  if (result.error) {
    res.status(500).json(result.error);
  } else {
    res.status(200).json(result);
  }
};

const login = async (req, res) => {
  try {
    res.status(200).json(await authen_services.login(req));
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const refreshToken = async (req, res) => {
  try {
    res.status(200).json(await authen_services.refreshToken(req, res));
  } catch (error) {
    res.status(500).json(error.message);
  }
};
module.exports = {
  //getList: users
  // ,
  // getByID: xxxx,
  // create_Template: xxxx,
  // update_Template: xxxx,
  // delete_Template: xxxx,
  // special_function: xxxx
  refreshToken,
  checkUserAccount,
  login,
};
