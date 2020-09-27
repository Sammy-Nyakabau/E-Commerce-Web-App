const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
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
  reviews: {
    type: Number,
  },
});

const Product = mongoose.model("Products", productsSchema);

exports.Product = Product;
