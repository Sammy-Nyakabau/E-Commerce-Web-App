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

router.put("/:id", async (req, res) => {
  const { numberOfReviews, rating } = req.body;
  const product = await Products.findByIdAndUpdate(
    req.params.id,
    {
      'number of reviews': numberOfReviews,
      rating
    },
    {
      new: true,
    }
  );

  if (!product)
    return res.status(404).send("The product with the given ID was not found.");

  res.send(product);
});

router.put("/admirers/:id", async (req, res) => {
  const { user } = req.body;
  const product = await Products.findByIdAndUpdate(
    req.params.id,
    { $push: { admirers: user } },
    {
      new: true,
    }
  );

  if (!product)
    return res.status(404).send("The product with the given ID was not found.");

  res.send(product);
});




module.exports = router;
