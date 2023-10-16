const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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

module.exports = mongoose.model('User', UserSchema);



