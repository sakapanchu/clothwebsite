// controllers/cart.js
const Cart = require('../models/Cart');

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.userId })
      .populate('items.product');
    res.json(cart || { items: [] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity, size } = req.body;
    let cart = await Cart.findOne({ user: req.userId });
    
    if (!cart) {
      cart = new Cart({ user: req.userId, items: [] });
    }
    
    const existingItem = cart.items.find(item => 
      item.product.toString() === productId && item.size === size
    );
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity, size });
    }
    
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Remove from cart
exports.removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findOne({ user: req.userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter((item) => item._id.toString() !== id);
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};