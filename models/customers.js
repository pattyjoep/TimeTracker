
// Creating our Customers model
module.exports = function(sequelize, DataTypes) {
  var Customers = sequelize.define("Customers", {
    // The email cannot be null, and must be a proper email before creation
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    addressStreetName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressAptNum: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    addressCity: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    addressState: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressCountry: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
    addressZip: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },       
  });
    
  return Customers;
};
    