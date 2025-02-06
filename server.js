require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
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
  res.sendFile(path.join(__dirname, "../form.html"));
});

app.post("/post", async (req, res) => {
  const { name, email, comments } = req.body;
  const user = new Users({
    name,
    email,
    comments,
  });
  await user.save();

  console.log(user);
  res.send(
    "<h1>Form Submitted!</h1><a href ='https://violin-greats-566d1255af97.herokuapp.com/' class = 'button' style = 'background-color: #5fa7e1; border: none;border-radius: 0.55rem;margin-top: 0.75rem;color: #fff;font-size: 1.5rem;text-decoration: overline;'>Back</a>"
  );
});

app.listen(port, () => {
  console.log("Server started port : " + port);
});
