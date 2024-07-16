const Weather = require("../models/weather.model.js");

const createWeather = async (record) => {
    return await Weather.create(record);
}

const getWeathers = async () => {
    return await Weather.find({});
}

module.exports = {
    createWeather,
    getWeathers,
}