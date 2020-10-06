const express = require("express");
const router = express.Router();
const { Order } = require("../models/orders");

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
router.post("/", async (req, res) => {
  const {
    user, //ONLY FOR TESTING
    orderItems,
    itemsPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const order = new Order({
      orderItems,
      user, //ONLY FOR TESTING => SHOULD BE user: req.user._id
      itemsPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
router.get("/myorders", async (req, res) => {
  const { user } = req.body;
  const orders = await Order.find({ user }); //ONLY FOR TESTING => SHOULD BE user: req.user._id
  res.json(orders);
});

module.exports = router;
