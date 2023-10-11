const express = require('express');
const router = express.Router();

const connectDB = require("./config/db");
const dotenv = require("dotenv");
const dishRoute = require('./routes/dishRoute');
const userRoute = require('./routes/userRoute');
const ordersRoute = require('./routes/ordersRoute');
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const path = require('path');

dotenv.config();
connectDB();
const app = express();

const port = process.env.PORT;

app.use(express.json());



app.use('/api/dishes/', dishRoute)               //if url is coming with 'api/dishes/' we navigate it to dishroute
app.use('/api/users/', userRoute)
app.use('/api/orders/', ordersRoute)

// --------------------------deployment------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname1, "/client/build")));

    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname1, "client", "build", "index.html"))
    );
} else {
    app.get("/", (req, res) => {
        res.send("API is running. Server working🔥 on port " + port);
    });
}

// --------------------------deployment------------------------------


// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`server running on port ${port}`))