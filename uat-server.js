require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const logger = require("./middleware/logger");
const api_route = require("./api/routing/route");
const create_feature = require("./feature/create_feature");
const PORT = process.env.PORT || 5001;

var cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const { json } = require("express");
// const multer = require("multer");
create_feature.create();
//--Config App---
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(logger);
// --Route Config ----
app.use(api_route);
//--Setting Default Page ---
app.get("/", (res) => {
  res.sendFile(path.join(__dirname, "./api/page/main", "index.html"));
});
//--Setting Port ----
app.listen(PORT, () => {
  console.log(` server is listerning on port ${PORT}`);
});

module.exports = app;
