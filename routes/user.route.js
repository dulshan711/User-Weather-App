const express = require("express")

const { createuser, getuser, getUsers, updateuser, deleteuser } = require("../controllers/user.controller");

const userRoute = express.Router();

userRoute.get("/", getUsers);
userRoute.post("/", createuser);

userRoute.get("/:id", getuser);

//update Product
userRoute.put("/:id", updateuser);

//Delete product
userRoute.delete("/:id", deleteuser);

module.exports = userRoute
