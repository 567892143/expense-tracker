const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
const corsOptions = {
    origin: "http://localhost:3000" 
}
app.use(express.json());
app.use(cors(corsOptions));

// connect MongoDB
mongoose.connect("mongodb://dinesh:test123@expensetrac.8jvbw.mongodb.net/?retryWrites=true&w=majority&appName=expensetrac").then(() => {
    const PORT = 8000
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});