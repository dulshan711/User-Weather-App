const Weather = require("../models/weather.model.js");
const weatherService = require("../services/weather.service.js");

const getweather = async (req, res) => {
  try {
    const weather = await weatherService.getWeathers();
    res.status(200).json(weather);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createweather = async (req, res) => {
  try {
    const weather = await Weather.create(req.body);
    res.status(200).json(weather);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatweather = async (req, res) => {
  try {
    const { id } = req.params;

    const weather = await Weather.findByIdAndUpdate(id, req.body);

    if (!weather) {
      return res.status(404).json({ message: "weather not found" });
    }

    const Udpateweather = await Weather.findById(id);
    res.status(200).json(weather);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteweather = async (req, res) => {
  try {
    const { id } = req.params;

    const weather = await Weather.findByIdAndDelete(id);

    if (!weather) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "weather delete successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getweather,
  createweather,
  updatweather,
  deleteweather,
};
