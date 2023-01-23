const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
    },
    fullName: {
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
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      default: "male",
    },
    avatar: {
      type: String,
      default: "",
    },
    friends: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    followings: [{ type: mongoose.Types.ObjectId, ref: "user" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
