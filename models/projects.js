/* eslint-disable camelcase */

// Creating our Projects model
module.exports = function(sequelize, DataTypes) {
  var Projects = sequelize.define("Projects", {
    // The email cannot be null, and must be a proper email before creation
    Project_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Projects.associate = function(models) {
    Projects.hasMany(models.Tasks, {
      onDelete: "cascade"
    });
  };

  return Projects;
};
