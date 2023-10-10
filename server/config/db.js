const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit with a non-zero status code to indicate an error
    }
};

module.exports = connectDB;

//checking if connection is successfull
// const db = mongoose.connection

// db.on('connected', () => {
//     console.log('MongoDb connected successfully!')
// })

// db.on('error', () => {
//     console.log('MongoDB connection failed :(')
// })
