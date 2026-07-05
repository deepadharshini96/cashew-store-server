const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  image: String,
});

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [orderItemSchema],
  total: { type: Number, required: true },
  address: {
    name: String,
    phone: String,
    line: String,
    city: String,
    pincode: String,
  },
  paymentMethod: { type: String, required: true },
  status: { type: String, default: 'Placed' },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);