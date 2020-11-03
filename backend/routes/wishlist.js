const express = require("express");
const router = express.Router();
const { Wishlist } = require("../models/wishlist");

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
router.post("/", async (req, res) => {
  const {
    user, //ONLY FOR TESTING
    wishlistItems,
  } = req.body;

  const wishlist = new Wishlist({
    user, //ONLY FOR TESTING => SHOULD BE user: req.user._id
    wishlistItems,
  });

  const createdWishlist = await wishlist.save();

  res.status(201).json(createdWishlist);
});

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
router.get("/mywishlist/:id", async (req, res) => {
  const { id: user } = req.params;
  const wishlist = await Wishlist.find({ user }); //ONLY FOR TESTING => SHOULD BE user: req.user._id
  res.json(wishlist);
});

router.delete("/:user", async (req, res) => {
  const { user } = req.params;
  const wishlist = await Wishlist.deleteMany({ user });

  res.send(wishlist);
});

module.exports = router;
