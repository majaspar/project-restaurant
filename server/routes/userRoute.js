const express = require('express');

const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.post("/register", async (req, res) => {

    const { name, email, password } = req.body;
    if (!email) { res.status(400).json({ message: 'All fields must be filled.' }) }
    if (!password) { res.status(400).json({ message: 'All fields must be filled.' }) }
    if (!!name) { res.status(400).json({ message: 'All fields must be filled.' }) }

    const emailExists = await User.findOne({ email })

    if (emailExists) {
        res.status(400).json({ message: 'This email is already in use.' })

    }

    else {
        try {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
            const newUser = new User({ name, email, password: hash })
            newUser.save()
            res.status(200).json({ email, newUser })
        }
        catch (error) {
            return res.status(400).json({ message: "An error has occurred." })
        }
    }

})
// const { name, email, password } = req.body;

// try {
//     const emailExists = await User.findOne({ email })
//     if (emailExists) { return res.send({ error: 'This email is already in use.' }) }

//     const salt = await bcrypt.genSalt(10);
//     const encryptedPassword = await bcrypt.hash(password, salt);

//     const newUser = new User({
//         name,
//         email,
//         password: encryptedPassword
//     })

//     newUser.save()
//     res.send({ status: "ok" })

// } catch (error) {
//     if (error.code == 11000) { console.log(error) }
//     res.send({ status: error })
// }


// if (!email) { res.status(400).json({ message: 'All fields must be filled.' }) }
// if (!password) { res.status(400).json({ message: 'All fields must be filled.' }) }
// if (!!name) { res.status(400).json({ message: 'All fields must be filled.' }) }


router.post("/login", async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) { res.status(400).json({ message: 'All fields must be filled.' }) }


    const user = await User.findOne({ email })

    if (user) {
        const match = await bcrypt.compare(password, user.password)
        try {
            if (match) {
                const currentUser = {
                    isAdmin: user.isAdmin,
                    phone: user.phone,
                    avatar: user.avatar,
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    createdAt: user.createdAt
                }
                res.send(currentUser);
            } else {
                res.status(400).json({ message: 'Incorrect email or password.' });
            }
        }
        catch (error) {
            return res.status(400).json({ message: 'An error occurred while trying to log in.' });
        }
    } else {
        res.status(400).json({ message: 'Incorrect email or password.' });
    }



});
//if (!email || !password) { res.status(400).json({ message: 'All fields must be filled.' }) }


// const user = await User.findOne({ email })

// if (!user) { return res.send({ error: 'User not found.' }) }

// const match = await bcrypt.compare(password, user.password)

// if (match) {
//     const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET)
//     if (res.status(201)) {
//         return res.json({ status: "ok", data: token })
//     } else {
//         return res.json({ error: "error" })
//     }
// }
// res.json({ status: "error", error: "Invalid password." })


router.post("/userdata", async (req, res) => {

    const { token } = req.body;

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)
        console.log(user)
        const userEmail = user.email;

        User.findOne({ email: userEmail })
            .then((data) => {
                res.send({ status: "ok", data: data })
            })
            .catch((error) => {
                res.send({ status: "error", data: error })
            });
    } catch (error) {

    }
})

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



// router.post("/register", async (req, res) => {
//     const { name, email, password } = req.body;
//     if (!email || !password || !name) { res.send('All fields must be filled') }
//     const emailExists = await User.findOne({ email })
//     if (emailExists) { throw res.send('This email address is already in use.') }
//     try {
//         const salt = await bcrypt.genSalt(10);
//         const hash = await bcrypt.hash(password, salt);
//         const newUser = new User({ name, email, password: hash })
//         newUser.save()
//         res.status(200).json({ email, newUser })

//     } catch (error) {
//         return res.status(400).json({ error: error.message })
//     }
// })



// router.post("/login", async (req, res) => {

//     const { email, password } = req.body;

//     if (!email || !password) {
//         throw Error('All fields must be filled')
//     }

//     const user = await User.findOne({ email })

//     if (!user) { throw Error('Incorrect EMAIL or password.') }

//     const match = await bcrypt.compare(password, user.password)
//     if (!match) {
//         throw Error('Incorrect email or PASSWORD.')
//     }
//     try {
//         if (match) {
//             const currentUser = {
//                 _id: user._id,
//                 name: user.name,
//                 email: user.email
//             }
//             res.send(currentUser);
//         }
//     }
//     catch (error) {
//         return res.status(400).json({ message: 'Something went wrong' });
//     }

// });



