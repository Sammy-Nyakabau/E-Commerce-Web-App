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
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const order = new Order({
      user, //ONLY FOR TESTING => SHOULD BE user: req.user._id
      orderItems,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
router.get("/myorders/:id", async (req, res) => {
  const { id: user } = req.params;
  const orders = await Order.find({ user }); //ONLY FOR TESTING => SHOULD BE user: req.user._id
  res.json(orders);
});

module.exports = router;
