const express = require('express');
const router = express.Router();
const Dish = require('../models/Dish');

router.get('/getalldishes', async (req, res) => {
    try {
        const dishes = await Dish.find({});
        res.send(dishes)
    }
    catch (error) {
        return res.status(400).json({ message: error })
    }
})


router.post("/adddish", async (req, res) => {

    const dish = req.body.dish

    try {
        const newDish = new Dish({
            name: dish.name,
            description: dish.description,
            category: dish.category,
            price: dish.price,
            isVegetarian: dish.isVegetarian
        })
        await newDish.save()
        res.send('New item added successfully.')
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});

router.post("/getdishbyid", async (req, res) => {

    const dishId = req.body.dishId

    try {
        const dish = await Dish.findOne({ _id: dishId })
        res.send(dish)
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});

router.post("/editdish", async (req, res) => {

    const editedDish = req.body.editedDish

    try {
        const dish = await Dish.findOne({ _id: editedDish._id })

        dish.name = editedDish.name,
            dish.description = editedDish.description,
            dish.category = editedDish.category,
            dish.price = editedDish.price,
            dish.isVegetarian = editedDish.isVegetarian

        await dish.save()

        res.send('You have successfully edited this item.')

    } catch (error) {
        return res.status(400).json({ message: error });
    }

});

router.post("/deletedish", async (req, res) => {

    const dishId = req.body.dishId

    try {
        await Dish.findOneAndDelete({ _id: dishId })
        res.send('Item deleted.')
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});






module.exports = router;