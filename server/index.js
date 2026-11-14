const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const app = express();
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error while connecting to MongoDB", err);
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log("Server is running on port " + PORT);
})