const mongoose = require("mongoose");

const basketSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
  basketItems: [
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

const Basket = mongoose.model("Basket", basketSchema);

module.exports.Basket = Basket;
