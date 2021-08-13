const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 300,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,  
  },
  price: {
    type: String,
    required: true,
    trim: true,
  },
  
});

const Products = model('product', productSchema);

module.exports = Products;
