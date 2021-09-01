const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require("../db")

const User = 
    sequelize.define("User", {
    username: {
    type: DataTypes.STRING
    }
})

module.exports = {
User
}