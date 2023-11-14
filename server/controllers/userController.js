const nodemailer = require('nodemailer')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const register = async (req, res) => {

    const { name, email, password } = req.body;

    const emailExists = await User.findOne({ email })
    if (emailExists) { return res.send({ error: 'This email is already in use.' }) }

    try {

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const newUser = new User({ name, email, password: hash })
        newUser.save()
        res.status(200).json({ email, newUser })



    }
    catch (error) {
        return res.status(400).json({ error: "An error has occurred." })
    }
}

const login = async (req, res) => {

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

}


const getOrderByEmail = async (req, res) => {
    const { userEmail } = req.body;

    let config = {
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_MAILER,
            pass: process.env.PASSWORD_MAILER,
        }
    }

    let transporter = nodemailer.createTransport(config)

    // let MailGenerator = new Mailgen({
    //     theme: "default",
    //     product: {
    //         name: "Mailgen",
    //         link: "https://mailgen.js"
    //     }
    // })

    // let response = {
    //     body: {
    //         name: "Lena Esposito",
    //         intro: "Your email has arrived",
    //         table: {
    //             data: [
    //                 {
    //                     item: "Nodemailer Stack Back",
    //                     description: "A Backend application",
    //                     price: "£free "
    //                 }
    //             ]
    //         },
    //         outro: "Looking forward to do business with you!"
    //     }
    // }

    // let mail = MailGenerator.generate(response) 

    let message = {
        from: process.env.EMAIL_MAILER, // sender address
        to: userEmail, // list of receivers
        subject: "Hey Hi Hello", // Subject line
        // text: "Did dis imejl rich majaspar?", // plain text body
        html: "<h1>This is an automatically generated email</H1>", // html body
    }


    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg: "You should receive an email",
            // info: info.messageId,
            // preview: nodemailer.getTestMessageUrl(info)
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })

    // res.status(201).json('getOrderByEmail successful')
}



module.exports = {
    login,
    register,
    getOrderByEmail
}