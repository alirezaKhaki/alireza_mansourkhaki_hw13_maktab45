const express = require("express");
const admin = express.Router();
const path = require("path");

admin.get("/getAllUsers", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/files/user.json"));
  console.log("send all users");
});

module.exports = admin;
