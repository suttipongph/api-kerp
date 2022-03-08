const moment = require("moment");
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Kraosoft@min@1",
  database: "KERP_DB_DEV",
  host: "168.63.248.120",
  port: 5432,
});

pool.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`KERP Services is Starting ... ${moment().format()}`);
  }
});

module.exports = pool;