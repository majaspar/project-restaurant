const express = require('express');
const router = express.Router();

const dishRoute = require('./routes/dishRoute');
const userRoute = require('./routes/userRoute');
const ordersRoute = require('./routes/ordersRoute');
const path = require('path')

const db = require("./db.js")

const app = express();
const port = process.env.PORT || 8000;

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
        res.send("API is running..");
    });
}

// --------------------------deployment------------------------------


app.get('/', (req, res) => {
    res.send("Server working🔥 on port " + port)
});

app.listen(port, () => console.log(`server running on port ${port}`))