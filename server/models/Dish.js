const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const DishSchema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    description: { type: String },
    isVegetarian: { type: Boolean, required: true }

})

module.exports = mongoose.model('Dish', DishSchema);