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
  'number of reviews': {
    type: Number,
  },
});

productsSchema.set('collection', 'Products');

const Products = mongoose.model("Products", productsSchema);

exports.Products = Products;
