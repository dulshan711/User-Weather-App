const User = require("../models/users.model.js");

const getUsers = async () => {
    return await User.find({});
}

module.exports = {
    getUsers,
}