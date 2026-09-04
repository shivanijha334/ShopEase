const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    customerName: String,
    email: String,
    address: String,
    products: Array,
    total: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Order", orderSchema);