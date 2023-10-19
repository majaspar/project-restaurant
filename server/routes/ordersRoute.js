const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51NLs6gLOk2koDDsjLOD5UURMAJYUTPLt6KfdT4KqjHpjf5vhF9dtIvLLV0O0VYprKmHv1OaLsFzce6DSLz4nlZWh00DvKiZH9V')
//2nd secret key from stripe
const { v4: uuidv4 } = require('uuid');
const Order = require('../models/Order')


router.post('/placeorder', async (req, res) => {
    const { token, total, currentUser, cartItems, delivery } = req.body;
    //console.log(currentUser)
    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })

        const payment = await stripe.charges.create({
            amount: total * 100,
            currency: 'GBP',
            customer: customer.id,
            receipt_email: token.email
        }, {
            idempotencyKey: uuidv4()
        })

        if (payment) {
            const newOrder = new Order({
                name: currentUser.name,
                email: currentUser.email,
                userId: currentUser._id,
                items: cartItems,
                delivery: delivery,
                orderAmount: total,
                address: {
                    street: token.card.address_line1,
                    postcode: token.card.address_zip,
                    city: token.card.address_city
                },
                phone: currentUser.phone,
                transactionId: payment.source.id
            })

            newOrder.save()

            res.send('Order placed successfully.')
        } else {
            res.send('Payment failed.')
        }
    } catch (error) {
        return res.status(400).json({ message: 'Something went wrong' })
    }
})

router.post('/getuserorders', async (req, res) => {

    const { userId } = req.body

    try {
        const orders = await Order.find({ userId: userId }).sort({ _id: -1 })
        res.send(orders)
    } catch (error) {
        return res.status(400).json({ message: 'Something went wrong' })
    }
});

router.get("/getallorders", async (req, res) => {
    try {
        const orders = await Order.find({}).sort({ createdAt: -1 });
        res.send(orders);
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

router.post("/collectorder", async (req, res) => {
    const orderId = req.body.orderId;
    try {
        const order = await Order.findOne({ _id: orderId });
        order.isCollected = true;
        await order.save();
        res.send("Order Collected Successfully");
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});
router.post("/deliverorder", async (req, res) => {
    const orderId = req.body.orderId;
    try {
        const order = await Order.findOne({ _id: orderId });
        order.isDelivered = true;
        await order.save();
        res.send("Order Delivered Successfully");
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

module.exports = router