const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true, minlength: 6 },
    email: { type: String, unique: true, required: true },
    phone: { type: String, required: false },
    avatar: { type: String, required: false },
    isAdmin: { type: Boolean, required: true, default: false },
    active: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('User', UserSchema);



