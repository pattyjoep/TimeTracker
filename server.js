// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
// Set Handlebars
var exphbs = require("express-handlebars");
var app = express();

// new fix: ----------------------------------------
const Handlebars = require("handlebars");
const {allowInsecurePrototypeAccess} = require("@handlebars/allow-prototype-access");

app.engine("handlebars", exphbs({ defaultLayout: "main", handlebars: allowInsecurePrototypeAccess(Handlebars) }));
// new fix: ----------------------------------------


app.use(express.static("public"));

app.set("view engine", "handlebars");


// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
require("./routes/users-routes.js")(app);
require("./routes/tasks-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎 Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
