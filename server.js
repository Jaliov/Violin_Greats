require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
var port = process.env.PORT || 3000;
var bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");
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

console.log("this is connection: " + process.env.MONGO_URI);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  comments: String,
});

const Users = mongoose.model("data", userSchema);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, " ../index.html"));
});

app.post(
  "/post",
  body("name").trim().notEmpty().isLength({ min: 3, max: 30 }),

  body("email").isEmail(),
  async (req, res) => {
    const { name, email, comments } = req.body;
    const user = new Users({
      name,
      email,
      comments,
    });
    const errors = validationResult(req);
    const message =
      "No empty fields. Name should be more than 2 characters long";
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .send(
          "<h4 style = 'font-family: Arial, Helvetica, sans-serif;'>" +
            message +
            "<a href = 'form.html' class = 'button'><br>Back</a></h4>"
        );
    }
    await user.save();

    console.log(user);
    res.redirect("signup_success.html");
  }
);

app.listen(port, () => {
  console.log("Server started port : " + port);
});
