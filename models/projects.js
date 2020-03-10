/* eslint-disable camelcase */

// Creating our Projects model
module.exports = function(sequelize, DataTypes) {
  var Projects = sequelize.define("Projects", {
    // The email cannot be null, and must be a proper email before creation
    Project_name: {
      type: DataTypes.STRING,
      allowNull: false,
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

  Projects.associate = function(models) {
    Projects.hasMany(models.Tasks, {
      onDelete: "cascade"
    });
  };

  return Projects;
};
