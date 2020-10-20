const { Review } = require("../models/reviews");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id: product } = req.params;
  const review = await Review.find({ product }).select("-__v");
  res.send(review);
});

router.post("/", async (req, res) => {
  const { product, review, verified } = req.body;

  const newReview = new Review({
    product,
    review,
    verified
  });
  const createdReview = await newReview.save();

  res.status(201).json(createdReview);
});

module.exports = router;
