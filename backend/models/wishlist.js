const mongoose = require("mongoose");

const wishlistSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
  wishlistItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Products",
      },
      name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
      },
      description: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1000,
      },
      image: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
        minlength: 5,
      },
      price: {
        type: Number,
        required: true,
      },
      rating: {
        type: Number,
      },
      "number of reviews": {
        type: Number,
      },
    },
  ],
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports.Wishlist = Wishlist;
