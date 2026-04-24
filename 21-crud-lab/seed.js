
const mongoose = require('mongoose');
const Product = require('./Product');

async function seed() {
  try {
    await mongoose.connect('mongodb://localhost:27017/crud_lab');
    console.log('Connected to MongoDB');

    await Product.deleteMany({});
    console.log('Cleared existing products');

    const products = [
      {
        name: "Wireless Headphones",
        description: "High-quality noise-cancelling headphones",
        price: 2999,
        category: "Electronics",
        stock: 50,
        rating: 4.5,
        inStock: true
      },
      {
        name: "Python Programming Book",
        description: "Complete guide to Python for beginners",
        price: 599,
        category: "Books",
        stock: 120,
        rating: 4.8,
        inStock: true
      },
      {
        name: "Cotton T-Shirt",
        description: "Premium quality cotton t-shirt",
        price: 499,
        category: "Clothing",
        stock: 200,
        rating: 4.2,
        inStock: true
      }
    ];

    await Product.insertMany(products);
    console.log('Seeded 3 products successfully');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding:', error);
    process.exit(1);
  }
}

seed();
