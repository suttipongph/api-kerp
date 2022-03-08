const pool = require("../../db");
const authen_model = require("../model/authen_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const accessFeatureModel = require("../model/access_model");
const { default: jwtDecode } = require("jwt-decode");

const checkUseraccount = async (req, res) => {
  try {
    let result = await authen_model.checkUseraccount(req, res);
    if (result.error) {
      return { error: error.message };
    } else {
      return result;
    }
  } catch (error) {
    return { error: error.message };
  }
};

const login = async (req) => {
  try {
    const result = await authen_model.findUser(req.body).catch((error) => {
      return {
        code: 500,
        message: "LABEL.UNPECTED_EXCEPTION",
        error_message: error.message,
      };
    });
    if (!result) {
      return {
        code: 500,
        message: "LABEL.USER_NOT_FOUND",
        error_message: "",
      };
    }
    if (await bcrypt.compare(req.body.user_password, result.correct_password)) {
      const accessList = await accessFeatureModel.list_acess_feature_view(
        result.role_uuid,
        result.subscribe_uuid
      );
      const user = {
        user_password: result.user_password,
        user_name: result.user_name,
        user_uuid: result.user_uuid,
      };
      result.refresh_token = generateRefreshToken(user, result.user_uuid);
      result.access_token = generateToken(user);
      result.access_feature = accessList;
    } else {
      return {
        code: 500,
        message: "LABEL.PASSWORD_INCORRECT",
        error_message: "",
      };
    }

    return result;
  } catch (error) {
    throw new Error(error);
  }
};
const register = async (req, res) => {
  try {
    const email = req.body.data.email;
    const table = req.body.table;
    const queryComand = "SELECT * FROM " + table + " WHERE email = $1";
    const newCom = await pool.query(queryComand, [email]);
    if (newCom.rows[0] === null) {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(req.body.data.password, salt);
      req.body.data.password = hashedPassword;
      let keys = [];
      let datas = [];
      let value = [];
      req.body.data.create_date = moment(new Date(), "YYYY-MM-DDTHH:mm");
      Object.keys(req.body.data).forEach(function (key, index) {
        datas.push(req.body.data[key]);
        keys.push(key);
        value.push("$" + (index + 1));
      });
      const queryComand =
        "INSERT INTO " +
        table +
        " (" +
        keys.toString() +
        ") values (" +
        value.toString() +
        ") RETURNING *";
      const newCom = await pool.query(queryComand, datas);
      res.json(newCom.rows[0]);
    } else {
      return res.status(400).send("อีเมลล์นี้ถูกลงทะเบียนไปแล้ว");
    }
  } catch (error) {
    res.json(error.message);
  }
};

const refreshToken = async (req, res) => {
  try {
    const authorization = req.headers["authorization"].split(" ");
    const refreshToken = authorization[0];
    const queryComand = "SELECT * FROM tokens_table WHERE refresh_token = $1";
    const newCom = await pool.query(queryComand, [refreshToken]);
    if (newCom.rows[0] === null) {
      return res.status(403).send("โปรดเข้าสู่ระบบ");
    }
    try {
      var decoded = jwt.verify(
        refreshToken,
        process.env.ACCESS_TOKEN_SECRET_REFRESH
      );
      if (decoded) {
        try {
          const user = {
            user_password: decoded.user_password,
            user_name: decoded.user_name,
            user_uuid: decoded.user_uuid,
          };
          const respon = {
            access_token: generateToken(user),
          };
          return respon;

          return respon;
        } catch (err) {
          throw new Error(error);
        }
      } else {
        throw new Error(error);
      }
    } catch (err) {
      throw new Error(error);
    }
  } catch (err) {
    throw new Error(error);
  }
};

function generateToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "3000m",
  });
}
const generateRefreshToken = (user, key) => {
  const refreshToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET_REFRESH);
  const sql = "DELETE FROM tokens_table WHERE create_user = $1";
  pool.query(sql, [key]);
  const queryComand =
    "INSERT INTO tokens_table ( refresh_token , create_user ) values ($1, $2) RETURNING *";
  pool.query(queryComand, [refreshToken, key]);
  return refreshToken;
};
let getUserNameFromToken = (req) => {
  try {
    const authHeader = req.headers["authorization"];
    if (authHeader == null) {
      throw new Error();
    }
    const token = authHeader.split(" ")[0];
    const userModel = jwtDecode(token);
    return userModel.user_name;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = {
  refreshToken,
  checkUseraccount,
  login,
  getUserNameFromToken,
};
