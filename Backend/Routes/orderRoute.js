const express = require("express");
const Order = require("../Models/orderSchema");
const router = express.Router();

// Create Order
router.post("/", async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: "Error placing order" });
    }
});

// Get User Orders
router.get("/:userId", async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: "Error fetching orders" });
    }
});

module.exports = router;
