const { Products } = require("../models/products");
// const auth = require("../middleware/auth");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

//Getting all Products
router.get("/", async (req, res) => {
  const products = await Products.find().select("-__v").sort("name");
  res.send(products);
});

module.exports = router;
