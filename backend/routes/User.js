const router = require("express").Router();
let User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

require("dotenv").config();

// router.get("/", (req, res) => {
//   User.find()
//     .then((users) => res.json(users))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

router.post("/", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  if (!username || !email || !password) {
    return res.status(400).json({ msg: "Enter All The Fields" });
  }

  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({ msg: "User Exists" });
    }
    const newUser = new User({
      username,
      email,
      password,
    });
    bcrypt.genSalt(10, (err, salt) => {
      if (err) throw err;
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            { id: user.id },
            "" + process.env.jwtSecret,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.username,
                  email: user.email,
                },
              });
            }
          );
        });
      });
    });
  });

  // .then(() => res.json("User added!"))
  // .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
