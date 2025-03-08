// controllers/products.js
const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const { category, sort } = req.query;
    const query = category ? { category } : {};
    const sortOptions = {
      'price-low-high': { price: 1 },
      'price-high-low': { price: -1 },
      'name-asc': { name: 1 },
      'name-desc': { name: -1 }
    };
    
    const products = await Product.find(query)
      .sort(sortOptions[sort] || {})
      .limit(12);
    
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};