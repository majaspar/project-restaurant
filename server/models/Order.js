const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const OrderSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    userId: { type: String, required: true },
    items: [],
    address: { type: Object, required: false },
    orderAmount: { type: Number, required: true },
    isCollected: { type: Boolean, default: false },
    isDelivered: { type: Boolean, default: false },
    delivery: { type: Boolean, default: true }, // if true -> delivery, if false -> collection
    transactionId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }


})
5
module.exports = mongoose.model('Order', OrderSchema);