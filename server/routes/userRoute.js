const router = require('express').Router();

const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {login, register, getOrderByEmail} = require('../controllers/userController');

router.post("/register", register)
router.post("/login", login);
router.post("/getOrderByEmail", getOrderByEmail);


router.get("/getallusers", async (req, res) => {

    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});

router.post("/deleteuser", async (req, res) => {

    const userId = req.body.userId

    try {
        await User.findOneAndDelete({ _id: userId })
        res.send('User Deleted Successfully')
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});


module.exports = router

