/* eslint-disable camelcase */
var moment = require("moment");
// Creating our Tasks model
module.exports = function(sequelize, DataTypes) {
  var Tasks = sequelize.define("Tasks", {
    Task_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hoursWorked: {
      type: DataTypes.INTEGER
    },
    createdAt: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue("createdAt")).format("MM/DD/YYYY h:mm:ss");
      }
    },
    updatedAt: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue("createdAt")).format("MM/DD/YYYY h:mm:ss");
      }
    }
  });
    
  return Tasks;
};
  