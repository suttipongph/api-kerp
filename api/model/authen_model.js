const pool = require("../../db");
const bcrypt = require("bcrypt");

const checkUseraccount = async (req, res) => {
  const username = req.body.user_name;
  try {
    const queryComand = "SELECT * FROM user_table where user_name = $1";
    const result = await pool.query(queryComand, [username]);
    return result.rows;
  } catch (error) {
    return { error: error.message };
  }
};

const findUser = async (userReq) => {
  return await pool
    .query("SELECT * FROM vw_user_table_item WHERE user_name = $1", [
      userReq.user_name,
    ])
    .then((data) => data.rows[0])
    .catch((error) => {
      throw error.message;
    });
};
const getUserView = async (userReq) => {
  const result = await pool
    .query("SELECT * FROM vw_user_table_item WHERE user_name = $1", [
      userReq.user_name,
    ])
    .catch((error) => {
      throw error.message;
    });
  return result.rows[0];
};

const checkPassword = async (reqPassword, foundUser) => {
  hashPassword = bcrypt.hashSync(reqPassword, bcrypt.genSaltSync(12));
  const res = await bcrypt
    .compare(reqPassword, foundUser.user_password)
    .then((result) => {
      if (result && result !== false) {
        return result;
      }
    })
    .catch(() => {
      throw new Error("Passwords do not match.");
    });
  return res;
};
module.exports = {
  checkUseraccount,
  findUser,
  checkPassword,
  getUserView,
};
