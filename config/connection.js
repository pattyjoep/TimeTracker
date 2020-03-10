// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");
var password = require("./../mySQLpass");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("time_veil_db", "root", {
  host: "localhost",
  port: 3306,
  password: password,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
