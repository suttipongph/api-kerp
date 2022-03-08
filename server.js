require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const logger = require("./middleware/logger");
const api_route = require("./api/routing/route");
const create_feature = require("./feature/create_feature");
// const docService = require("./feature/create_tambon");
const PORT = process.env.PORT || 5000;
const fs = require("fs");
var cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const documentService = require("./api/shared/document/document_service");
// const { json } = require("express");
// const multer = require("multer");
// documentService.createDocument();
// documentService.createDocument();
//create_feature.create();
//--Config App---
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use(cors());
app.use(logger);

// --Route Config ----
app.use(api_route);
//--Setting Default Page ---
app.get("/", (res) => {
  res.sendFile(path.join(__dirname, "./api/page/main", "index.html"));
});
app.listen(PORT, () => {
  console.log(` server is listerning on port ${PORT}`);
});

module.exports = app;
