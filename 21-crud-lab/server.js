const express = require('express');
const connectDB = require('./db');
const Product = require('./Product');

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// ==================== ROUTES ====================

// CREATE - Add a new product
app.post('/api/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({
      message: 'Product created successfully',
      product,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

// READ - Get all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: 'All products retrieved',
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// READ - Get product by ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        error: 'Product not found',
      });
    }
    res.status(200).json({
      message: 'Product retrieved',
      product,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// READ - Get products by category
app.get('/api/products/category/:category', async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.status(200).json({
      message: `Products in ${req.params.category}`,
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// UPDATE - Update product by ID
app.put('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return res.status(404).json({
        error: 'Product not found',
      });
    }
    res.status(200).json({
      message: 'Product updated successfully',
      product,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

// DELETE - Delete product by ID
app.delete('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({
        error: 'Product not found',
      });
    }
    res.status(200).json({
      message: 'Product deleted successfully',
      product,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// DELETE - Delete all products
app.delete('/api/products', async (req, res) => {
  try {
    const result = await Product.deleteMany({});
    res.status(200).json({
      message: 'All products deleted',
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Test route
app.get('/', (req, res) => {
  res.json({
    message: 'CRUD Lab API is running',
    endpoints: {
      'POST /api/products': 'Create a new product',
      'GET /api/products': 'Get all products',
      'GET /api/products/:id': 'Get product by ID',
      'GET /api/products/category/:category': 'Get products by category',
      'PUT /api/products/:id': 'Update product by ID',
      'DELETE /api/products/:id': 'Delete product by ID',
      'DELETE /api/products': 'Delete all products',
    },
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});