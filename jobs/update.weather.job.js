const userService = require("../services/user.service.js");
const weatherService = require("../services/weather.service.js");

const weathers = ["rainy", "sunny", "misty", "sandy", "windy"];

const JobName = "Update Weather Job";

const updateWeatherJob = async (hour) => {
    console.log(`info. job ${JobName} has started. hour ${hour}`);

    console.log(`\tinfo. loading users...`);
    const users = await userService.getUsers();
    if (!users) {
        return;
    }
    console.log(`\tinfo. loaded ${users.length} users...`);

    users.forEach(async (user) => {
        console.log(`\tinfo. getting weather for ${user.name}...`);
        const weather = weathers[Math.ceil((Math.random() * (weathers.length - 1)))];

        console.log(`\tinfo. creating weather record as ${weather} for ${user.name} at time ${new Date().toLocaleTimeString()}...`);
        weatherService.createWeather({
            userEmail: user.email,
            cityName: user.location,
            weather,
        });
    });
};

module.exports = updateWeatherJob;