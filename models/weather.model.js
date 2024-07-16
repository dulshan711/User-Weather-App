const mongoose = require("mongoose");

const weatherschema = mongoose.Schema(
  {
    weather: {
      type: String,
      required: [true, "please enter the weather type"],
    },
    cityName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    }
  },
  {
    Timestamp: true,
  }
);

const weather = mongoose.model("weather", weatherschema);

module.exports = weather;
