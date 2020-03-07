
// Creating our Departments model
module.exports = function(sequelize, DataTypes) {
  var Departments = sequelize.define("Departments", {
    // The email cannot be null, and must be a proper email before creation
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  
  return Departments;
};
  