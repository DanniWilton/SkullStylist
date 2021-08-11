const { Schema, model } = require('mongoose');

const ShopItemSchema = new Schema({
  NewItemName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
    trim: true,
  },
  NewItemDescription: {
    type: String,
    required: 'Add a new item',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  NewItemPrice: {
    type: Number,
    required: true,
    trim: true,
  },
  
});

const Shop = model('Shop', ShopItemSchema);

module.exports = Shop;
