var db = require("../models");

module.exports = function(app) {
  // Find all users and return them with res.json
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  app.get("/api/users/:id", function(req, res) {
    // Find one user with the id in req.params.id and return them to the user with res.json
    db.Users.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });  
  
};
