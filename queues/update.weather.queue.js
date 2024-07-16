const TimerQueue = require("timer-queue");
const updateWeatherJob = require("../jobs/update.weather.job");

let count = 0;

const updateWeatherQueue = new TimerQueue({
    timeout: 10000,
    retry: 1,
    retryInterval: 10_000,
    autostart: false,
});

updateWeatherQueue.push(() => {
    updateWeatherJob(++count);

    return false;
});

updateWeatherQueue.on('end', () => {
    console.log("info. queue has finished");
});

module.exports = updateWeatherQueue;