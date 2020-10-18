const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
  orderItems: [
     {
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

const Order = mongoose.model("Order", orderSchema);

module.exports.Order = Order;
