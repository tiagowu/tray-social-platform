const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
    },
    fullname: {
      type: String,
      trim: true,
      required: true,
    },
    username: {
      type: String,
      trim: true,
      unique: true,
      required: true,
      maxlength: 25,
      // match: [
      //   /^[A-Za-z0-9_.]+$/,
      //   "Usernames should only use letters, numbers, underscores and periods.",
      // ],
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      default: "male",
    },
    friends: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    followings: [{ type: mongoose.Types.ObjectId, ref: "user" }],
  },
  { timestamp: true }
);

module.exports = mongoose.model("user", UserSchema);
