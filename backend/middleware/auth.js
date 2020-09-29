const passport = require("passport");
const session = require("express-session");

module.exports = function (app) {
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: true,
      saveUninitialized: true,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
};
