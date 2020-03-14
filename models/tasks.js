/* eslint-disable camelcase */

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
      type: DataTypes.DATEONLY,
      defaultValue: new Date()
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      defaultValue: new Date()
    }
  });
    
  return Tasks;
};
  