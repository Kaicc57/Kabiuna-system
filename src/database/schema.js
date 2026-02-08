// Database Schema Definitions for Products, Stock, and Movements

// Product Schema
const ProductSchema = {
    productId: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
};

// Stock Schema
const StockSchema = {
    stockId: { type: Number, required: true, unique: true },
    productId: { type: Number, required: true },
    quantity: { type: Number, required: true },
    warehouseLocation: { type: String },
    lastUpdated: { type: Date, default: Date.now }
};

// Movements Schema
const MovementSchema = {
    movementId: { type: Number, required: true, unique: true },
    productId: { type: Number, required: true },
    quantity: { type: Number, required: true },
    type: { type: String, enum: ['IN', 'OUT'], required: true }, // IN for stock addition, OUT for removal
    timestamp: { type: Date, default: Date.now },
    notes: { type: String }
};

module.exports = { ProductSchema, StockSchema, MovementSchema };