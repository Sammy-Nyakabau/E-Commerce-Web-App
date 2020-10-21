const express = require("express");
//add routes specific to project here
// const auth = require('../routes/auth');
const products = require("../routes/products");
const categories = require("../routes/categories");
const orders = require("../routes/orders");
const basket = require("../routes/basket");
const wishlist = require("../routes/wishlist");
const reviews = require("../routes/reviews");
const users = require("../routes/users");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());
  // app.use('/api/auth', auth);
  app.use("/api/products", products);
  app.use("/api/categories", categories);
  app.use("/api/users", users);
  app.use("/api/orders", orders);
  app.use("/api/basket", basket);
  app.use("/api/wishlist", wishlist);
  app.use("/api/reviews", reviews);
  app.use(error);
};
