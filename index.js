require("dotenv").config();
const express = require("express");
const app = express();
const pool = require("./db");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const bcrypt = require("bcrypt");
var cors = require("cors");
const { json } = require("express");
const multer = require("multer");
const route = require("./api/routing/route");

app.use(express.json());
app.use(cors());

app.use(route);

app.listen(5000, () => {
  console.log(" server is listerning on port 5000");
});

module.exports = app;
