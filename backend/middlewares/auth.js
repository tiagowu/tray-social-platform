const Users = require("../models/userModel");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) return res.status(500).json({ msg: "Invalid" });

    const decoded = jwt.verify(token, process.env.ACCESSTOKENSECRET);
    if (!decoded) return res.status(500).json({ msg: "Invalid" });

    const user = Users.findOne({ _id: decoded.id });
    req.user = user;
    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = auth;
