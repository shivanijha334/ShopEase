const Product = require("../models/product");

exports.addProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.json({
            message: "Product Added Successfully",
            product
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};