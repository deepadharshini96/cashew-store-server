require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

const products = [
  {
    name: "Premium W240 Cashews",
    price: 850,
    originalPrice: 900,
    rating: 4.5,
    image: "https://example.com/cashew1.jpg",
    description: "Whole premium grade cashews, 1Kg pack",
  },
  {
    name: "Roasted Salted Cashews",
    price: 380,
    originalPrice: 420,
    rating: 4.2,
    image: "https://example.com/cashew2.jpg",
    description: "Lightly salted and roasted, 250g pack",
  },
   {
    name: "Premium W320 Cashews",
    price: 750,
    originalPrice: 800,
    rating: 4.5,
    image: "https://example.com/cashew1.jpg",
    description: "Whole premium grade cashews, 1Kg pack",
  },
   {
    name: "Premium Two Peice Cashews",
    price: 750,
    originalPrice: 800,
    rating: 4.5,
    image: "https://example.com/cashew1.jpg",
    description: "Whole premium grade cashews, 1Kg pack",
  },
   {
    name: "Premium Four Peice Cashews",
    price: 650,
    originalPrice: 700,
    rating: 4.5,
    image: "https://example.com/cashew1.jpg",
    description: "Whole premium grade cashews, 1Kg pack",
  },
   {
    name: "Premium SW Cashews",
    price: 650,
    originalPrice: 600,
    rating: 4.5,
    image: "https://example.com/cashew1.jpg",
    description: "Whole premium grade cashews, 1Kg pack",
  },
   {
    name: "Premium SSW Cashews",
    price: 450,
    originalPrice: 500,
    rating: 4.5,
    image: "https://example.com/cashew1.jpg",
    description: "Whole premium grade cashews, 1Kg pack",
  },
   {
    name: "Premium W180 Cashews",
    price: 950,
    originalPrice: 1000,
    rating: 4.5,
    image: "https://example.com/cashew1.jpg",
    description: "Whole premium grade cashews, 1Kg pack",
  },
   {
    name: "Premium W450 Cashews",
    price: 650,
    originalPrice: 700,
    rating: 4.5,
    image: "https://example.com/cashew1.jpg",
    description: "Whole premium grade cashews, 1Kg pack",
  },
   {
    name: "Premium W500 Cashews",
    price: 600,
    originalPrice: 650,
    rating: 4.5,
    image: "https://example.com/cashew1.jpg",
    description: "Whole premium grade cashews, 1Kg pack",
  },
   {
    name: "Premium SP Cashews",
    price: 450,
    originalPrice: 500,
    rating: 4.5,
    image: "https://example.com/cashew1.jpg",
    description: "Whole premium grade cashews, 1Kg pack",
  },
   {
    name: "Premium SSP Cashews",
    price: 350,
    originalPrice: 400,
    rating: 4.5,
    image: "https://example.com/cashew1.jpg",
    description: "Whole premium grade cashews, 1Kg pack",
  },
   {
    name: "Premium W210 Cashews",
    price: 1000,
    originalPrice: 1500,
    rating: 4.5,
    image: "https://example.com/cashew1.jpg",
    description: "Whole premium grade cashews, 1Kg pack",
  },
   {
    name: "Premium DW Cashews",
    price: 250,
    originalPrice: 300,
    rating: 4.5,
    image: "https://example.com/cashew1.jpg",
    description: "Whole premium grade cashews, 1Kg pack",
  },
   {
    name: "Premium DP Cashews",
    price: 250,
    originalPrice: 300,
    rating: 4.5,
    image: "https://example.com/cashew1.jpg",
    description: "Whole premium grade cashews, 1Kg pack",
  },
  // add your remaining products here in the same format
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('✅ Connected to MongoDB');
    await Product.deleteMany(); // clears old data first (optional)
    await Product.insertMany(products);
    console.log('✅ Products added successfully!');
    mongoose.disconnect();
  })
  .catch((err) => console.error('❌ Error:', err));