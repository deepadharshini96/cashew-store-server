const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: String,
  stars: Number,
  comment: String,
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  rating: { type: Number, default: 0 },
  image: { type: String, required: true },
  description: { type: String },
  reviews: [reviewSchema],
});

module.exports = mongoose.model('Product', productSchema);