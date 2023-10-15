const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');



router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    const emailExists = await User.findOne({ email })
    if (emailExists) { throw Error('This email address is already in use.') }

    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const newUser = new User({ name, email, password: hash })
        newUser.save()
        res.status(200).json({ email, newUser })

    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})

router.post("/login", async (req, res) => {

    const { email, password } = req.body;



    if (!email || !password) {
        throw Error('All fields must be filled')
    }

    const user = await User.findOne({ email })

    if (!user) { throw Error('Incorrect EMAIL or password.') }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error('Incorrect email or PASSWORD.')
    }
    try {
        if (match) {
            const currentUser = {
                _id: user._id,
                name: user.name,
                email: user.email
            }
            res.send(currentUser);
        }
    }

    // if (user.length > 0) {

    //     const currentUser = {
    //         _id: user._id,
    //         name: user.name,
    //         email: user.email
    //     }
    //     res.send(currentUser);

    // }
    // else {

    //     return res.status(400).json({ message: 'User Login Failed' });
    // }

    catch (error) {
        return res.status(400).json({ message: 'Something went wrong' });
    }

});


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

