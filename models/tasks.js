/* eslint-disable camelcase */

// Creating our Tasks model
module.exports = function(sequelize, DataTypes) {
  var Tasks = sequelize.define("Tasks", {
    Task_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    assignedTo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    },
    hoursWorked: {
      type: DataTypes.INTEGER
    }
  });

  Tasks.associate = function(models) {
    Tasks.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
    Tasks.belongsTo(models.Projects, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  // Tasks.associate = function(models) {
  //   Tasks.belongsTo(models.Users, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  // Tasks.associate = function(models) {
  //   Tasks.hasMany(models.Times, {
  //     onDelete: "cascade"
  //   });
  // };
  
  return Tasks;
};
  