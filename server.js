require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const { body, validationResult } = require("express-validator");
var port = process.env.PORT || 3000;
var bodyParser = require("body-parser");
// const bodyParser = require("body-parser");
// const bcrypt = require("bcrypt");

// bcrypt.hash("wabby182", 5, function (err, hash) {
//   console.log(hash);
//   // The hash returned, continue to compare
//   bcrypt.compare("wabby182", hash, function (err, result) {
//     console.log("wabby182:", result); // generic: true
//   });

//   bcrypt.compare("falsy", hash, function (err, result) {
//     console.log("falsy:", result); // falsy: false
//   });
// });

const app = express();
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});
db.once("open", () => {
  console.log("Mongodb connection is a go!");
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  comments: String,
});

const Users = mongoose.model("data", userSchema);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, " ../index.html"));
});

app.post("/post", async (req, res) => {
  body("name").isAlphanumeric().trim().escape();
  const { name, email, comments } = req.body;
  const user = new Users({
    name,
    email,
    comments,
  });

  router.post("/post", loginValidator, (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      // in case request params meet the validation criteria
      return res.status(200).json();
    }
    res.status(422).json({ errors: errors.array() });
  });

  app.use((err, res) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
  });

  console.log(user);
  res.redirect("signup_success.html");
});

app.listen(port, () => {
  console.log("Server started port : " + port);
});
