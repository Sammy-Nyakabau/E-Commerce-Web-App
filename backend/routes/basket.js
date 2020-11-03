const express = require("express");
const router = express.Router();
const { Basket } = require("../models/basket");

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
router.post("/", async (req, res) => {
  const {
    user, //ONLY FOR TESTING
    basketItems,
  } = req.body;

  const basket = new Basket({
    user, //ONLY FOR TESTING => SHOULD BE user: req.user._id
    basketItems,
  });

  const createdBasket = await basket.save();

  res.status(201).json(createdBasket);
});

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
router.get("/mybasket/:id", async (req, res) => {
  const { id: user } = req.params;
  const basket = await Basket.find({ user }); //ONLY FOR TESTING => SHOULD BE user: req.user._id
  res.json(basket);
});

router.delete("/:user", async (req, res) => {
  const { user } = req.params;
  const basket = await Basket.deleteMany({ user });

  res.send(basket);
});

module.exports = router;
