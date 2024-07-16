const mongoose = require("mongoose");

const userschema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter the User name"],
    },
    location: {
      type: String,
      required: true,
      default: 0,
    },
    email: {
      type: String,
      required: true,
      default: 0,
    },
  },
  {
    Timestamp: true,
  }
);

const user = mongoose.model("user", userschema);

module.exports = user;
