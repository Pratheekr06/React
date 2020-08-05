// const config = require("config");
const jwt = require("jsonwebtoken");

require("dotenv").config();

function auth(req, res, next) {
  const token = req.header("x-auth-token");

  if (!token)
    return res.status(401).json({ msg: "No Such Token, Authorization Denied" });

  try {
    const verification = jwt.verify(token, "" + process.env.jwtSecret);

    req.user = verification;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Invalid Token" });
  }
}

module.exports = auth;
