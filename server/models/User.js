const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true, minlength: 6 },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: false },
    avatar: { type: String, required: false },
    isAdmin: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

// UserSchema.statics.register = async function (email, password, name) {

//     // validation
//     if (!email || !password || !name) {
//         throw Error('All fields must be filled')
//     }
//     if (!validator.isEmail(email)) {
//         throw Error('Email not valid')
//     }
//     if (!validator.isStrongPassword(password)) {
//         throw Error('Password not strong enough')
//     }

//     const exists = await this.findOne({ email })

//     if (exists) {
//         throw Error('Email already in use')
//     }

//     const salt = await bcrypt.genSalt(10)
//     const hash = await bcrypt.hash(password, salt)

//     const user = await this.create({ email, password: hash, name })

//     return user
// }
// // static login method
// UserSchema.statics.login = async function (email, password) {

//     if (!email || !password) {
//         throw Error('All fields must be filled')
//     }

//     const user = await this.findOne({ email })
//     if (!user) {
//         throw Error('Incorrect email')
//     }

//     const match = await bcrypt.compare(password, user.password)
//     if (!match) {
//         throw Error('Incorrect password')
//     }
//     return user
// }

module.exports = mongoose.model('User', UserSchema);



