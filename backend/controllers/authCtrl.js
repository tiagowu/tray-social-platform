const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authCtrl = {
  register: async (req, res) => {
    try {
      const { email, fullname, username, password } = req.body;

      const newUsername = username.toLowerCase();
      const confirmUsername = await Users.findOne({ username: newUsername });
      if (confirmUsername) return res.status(400).json({ msg: "This username already exists." });

      const confirmEmail = await Users.findOne({ email: email });
      if (confirmEmail) return res.status(400).json({ msg: "This email is already in use." });

      if (password.length < 8)
        return res.status(400).json({ msg: "Password must be atleast 8 characters long." });

      const hashedPassword = await bcrypt.hash(password, 13);

      const newUser = new Users({
        email,
        fullname,
        username: newUsername,
        password: hashedPassword,
      });

      const accessToken = createAccessToken({ id: newUser._id });
      const refreshToken = createRefreshToken({ id: newUser._id });

      res.cookie("refreshtoken", refreshToken, {
        httpOnly: true,
        path: "/api/refresh_token",
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });

      await newUser.save();
      res.json({
        msg: "registered success",
        accessToken,
        user: { ...newUser._doc, password },
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  login: async (req, res) => {
    try {
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  logout: async (req, res) => {
    try {
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  generateAccessToken: async (req, res) => {
    try {
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESSTOKENSECRET, { expiresIn: "1d" });
};

const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESHTOKENSECRET, { expiresIn: "30d" });
};

module.exports = authCtrl;
