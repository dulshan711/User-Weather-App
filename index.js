const express = require("express")
const mongoose = require("mongoose")

// import queues
const updateWeatherQueue = require("./queues/update.weather.queue")

// import routes
const userRoute = require("./routes/user.route.js");
const weatherRoute = require("./routes/weather.route.js");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// apply routes
app.use("/api/users", userRoute);
app.use("/api/weather", weatherRoute);

// connect to db and start queues
mongoose
  .connect(
    // "mongodb+srv://agpeagle:4C1EYnAPYuzyjvp9@backend.zkwgn8n.mongodb.net/USER-API?retryWrites=true&w=majority&appName=backend"
    "mongodb://127.0.0.1:27017/weatherapidb"
  )
  .then(() => {
    console.log("Database connection successful");

    app.listen(4000, () => {
      console.log("Server is running on port 4000");
    });

    // start queues
    updateWeatherQueue.start();
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
