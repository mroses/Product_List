const mongoose = require('mongoose');
const validator = require('node-mongoose-validator');

const { Schema } = mongoose;


const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, "Product name is required."],
    minlength: [3, "Product name must be at least 3 characters."],
    trim: true
  },
  qty: {
    type: String, //validate works on string
    required: [true, "Product quantity is required."],
    min: [0, "Quantity must be greater than or equal to 0."],
    trim: true
  },
  price: {
    type: String, //validate works on string
    required: [true, "Product must have a price."],
    min: [0, "Price must be greater than or equal to 0."],
    trim: true,
  },
}, {
    timestamps: true
  });

ProductSchema.path('qty').validate(validator.$isNumeric({ msg: 'Quantity must be an integer.' }));
ProductSchema.path('price').validate(validator.$isFloat({ msg: 'Price must be a number or decimal value.' }));
module.exports = mongoose.model('Product', ProductSchema);
