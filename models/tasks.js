
// Creating our Tasks model
module.exports = function(sequelize, DataTypes) {
  var Tasks = sequelize.define("Tasks", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    assignedTo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

  Tasks.associate = function(models) {
    Tasks.belongsTo(models.Projects, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Tasks.associate = function(models) {
    Tasks.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Tasks.associate = function(models) {
    Tasks.hasMany(models.Times, {
      onDelete: "cascade"
    });
  };
  
  return Tasks;
};
  