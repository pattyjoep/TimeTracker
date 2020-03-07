
// Creating our Times model
module.exports = function(sequelize, DataTypes) {
  var Times = sequelize.define("Times", {
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    assignedTo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

  Times.associate = function(models) {
    Times.belongsTo(models.Tasks, {
      foreignKey: {
        allowNull: false
      }
    });
  };
    
  return Times;
};
    