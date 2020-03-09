var db = require("../models");

module.exports = function(app) {
  // Find all Tasks and return them to the user with res.json
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  app.get("/api/users/:id", function(req, res) {
    // Find one Author with the id in req.params.id and return them to the user with res.json
    db.Users.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
  
};
