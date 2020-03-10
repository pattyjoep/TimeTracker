var db = require("../models");

module.exports = function(app) {
  // Find all Tasks and return them to the user with res.json
  app.get("/api/projects", function(req, res) {
    db.Tasks.findAll({}).then(function(dbTasks) {
      res.json(dbTasks);
    });
  });

  app.get("/api/projects/:id", function(req, res) {
    // Find one Author with the id in req.params.id and return them to the user with res.json
    db.Tasks.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbTasks) {
      res.json(dbTasks);
    });
  });
  
};
