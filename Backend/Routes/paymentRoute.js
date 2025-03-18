const express = require('express');
const Razorpay = require('razorpay');

const router = express.Router();
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.post('/', async (req, res) => {
    try {
        const { amount, currency } = req.body;
        const order = await razorpay.orders.create({ amount, currency, payment_capture: 1 });
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: 'Error processing payment' });
    }
});

module.exports = router;
