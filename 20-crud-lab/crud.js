const Product = require('./Product');

// CREATE - Add a new product
const createProduct = async (productData) => {
  try {
    const product = new Product(productData);
    await product.save();
    console.log('Product created:', product);
    return product;
  } catch (error) {
    console.error('Error creating product:', error.message);
    throw error;
  }
};

// READ - Get all products
const getAllProducts = async () => {
  try {
    const products = await Product.find();
    console.log('All products retrieved:', products);
    return products;
  } catch (error) {
    console.error('Error fetching products:', error.message);
    throw error;
  }
};

// READ - Get product by ID
const getProductById = async (id) => {
  try {
    const product = await Product.findById(id);
    if (!product) {
      console.log('Product not found');
      return null;
    }
    console.log('Product retrieved:', product);
    return product;
  } catch (error) {
    console.error('Error fetching product:', error.message);
    throw error;
  }
};

// READ - Get products by category
const getProductsByCategory = async (category) => {
  try {
    const products = await Product.find({ category });
    console.log(`Products in ${category}:`, products);
    return products;
  } catch (error) {
    console.error('Error fetching products by category:', error.message);
    throw error;
  }
};

// UPDATE - Update product by ID
const updateProduct = async (id, updateData) => {
  try {
    const product = await Product.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      console.log('Product not found');
      return null;
    }
    console.log('Product updated:', product);
    return product;
  } catch (error) {
    console.error('Error updating product:', error.message);
    throw error;
  }
};

// DELETE - Delete product by ID
const deleteProduct = async (id) => {
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      console.log('Product not found');
      return null;
    }
    console.log('Product deleted:', product);
    return product;
  } catch (error) {
    console.error('Error deleting product:', error.message);
    throw error;
  }
};

// DELETE - Delete all products
const deleteAllProducts = async () => {
  try {
    const result = await Product.deleteMany({});
    console.log('All products deleted:', result);
    return result;
  } catch (error) {
    console.error('Error deleting all products:', error.message);
    throw error;
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  getProductsByCategory,
  updateProduct,
  deleteProduct,
  deleteAllProducts,
};