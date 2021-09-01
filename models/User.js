const { Sequelize, DataTypes } = require('sequelize');

const User = (sequelize) => {
    sequelize.define("User", {
    username: {
    type: DataTypes.STRING
    }
})
}
module.exports = {
User
}