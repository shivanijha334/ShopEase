const Order = require("../models/order");

exports.placeOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();

        res.json({
            message: "Order Placed Successfully",
            order
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }
};

exports.getOrders = async (req, res) => {

    try {

        const orders = await Order.find();

        res.json(orders);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};