const router = require("express").Router();
let User = require("../models/User.model");
const bcrypt = require("bcryptjs");
// const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/Auth");

require("dotenv").config();

// router.route("/").get((req, res) => {
//   User.find()
//     .then((users) => res.json(users))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

router.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(400).json({ msg: "Enter All The Fields" });
  }

  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(400).json({ msg: "User Does Not Exists" });
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

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

router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
});

module.exports = router;
