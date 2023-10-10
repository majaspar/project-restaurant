const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true });

//checking if connection is successfull
const db = mongoose.connection

db.on('connected', () => {
    console.log('MongoDb connected successfully!')
})

db.on('error', () => {
    console.log('MongoDB connection failed :(')
})

module.exports = mongoose;