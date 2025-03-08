require('dotenv').config();
const express = require('express');
const cors = require("cors");
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const authMiddleware = require('./middleware/auth');

const app = express();

// Middleware
app.use(express.json());
app.use(cors(
    {
        origin: "http://localhost:3000", 
        credentials: true,
    }
));

// Database connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', authMiddleware, cartRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
    res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));