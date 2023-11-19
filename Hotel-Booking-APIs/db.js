const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectionDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_LOCAL); // For web mongo: process.env.MONGO
        console.log("connected to mongodb!")
    } catch (error) {
        throw error;
    }
}

module.exports = connectionDB;