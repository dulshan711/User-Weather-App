const express = require("express")

const { createweather, deleteweather, getweather, updatweather } = require("../controllers/weather.controller");

const weatherRoute = express.Router();

weatherRoute.get("/", getweather);
weatherRoute.post("/", createweather);

//update Product
weatherRoute.put("/:id", updatweather);

//Delete product
weatherRoute.delete("/:id", deleteweather);

module.exports = weatherRoute
