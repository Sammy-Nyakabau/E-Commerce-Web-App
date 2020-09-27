const { Products } = require("../models/products");
// const auth = require("../middleware/auth");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

//Getting all Products with a category of aircraft
router.get("/aircraft", async (req, res) => {
  const products = await Products.find({ category: "Aircraft" })
    .select("-__v")
    .sort("name");
  res.send(products);
});

router.get("/helicopters", async (req, res) => {
  const products = await Products.find({ category: "Helicopters" })
    .select("-__v")
    .sort("name");
  res.send(products);
});

router.get("/unmanned-aerial-systems", async (req, res) => {
  const products = await Products.find({ category: "Unmanned Aerial Systems" })
    .select("-__v")
    .sort("name");
  res.send(products);
});

router.get("/jet-liners", async (req, res) => {
  const products = await Products.find({ category: "Jet Liners" })
    .select("-__v")
    .sort("name");
  res.send(products);
});

module.exports = router;
