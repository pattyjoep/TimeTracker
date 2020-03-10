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
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    }
  });

  Tasks.associate = function(models) {
    Tasks.belongsTo(models.Users, {
      foreignKey: {
        allowNull: true
      }
    });
    Tasks.belongsTo(models.Projects, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  
  return Tasks;
};
  