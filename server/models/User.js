const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true, minlength: 6, maxlength: 15 },
    email: { type: String, required: true },
    // email: {
    //     type: String,
    //     validate: {
    //         validator: async function (email) {
    //             const user = await this.constructor.findOne({ email });
    //             if (user) {
    //                 if (this.id === user.id) {
    //                     return true;
    //                 }
    //                 return false;
    //             }
    //             return true;
    //         },
    //         message: props => 'The specified email address is already in use.'
    //     },
    //     required: true,
    // },

    phone: { type: String, required: false },
    avatar: { type: String, required: false },
    isAdmin: { type: Boolean, required: true, default: false },
},
    {
        timeStamps: true
    })

module.exports = mongoose.model('User', UserSchema);



