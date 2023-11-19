const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
// importing files
const connectionDB = require("./db");
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const hotelsRouter = require("./routes/hotels");
const roomsRouter = require("./routes/rooms");

const app = express();
const port = 8800;

dotenv.config()


mongoose.connection.on("disconnected",()=>{
    console.log("mongodb disconnected!");
})
// mongoose.connection.on("connected",()=>{
//     console.log("mongodb connected!");
// })

// Middleware
app.use(cookieParser());
app.use(express.json());
// app.use(express.urlencoded({extended:false}));
app.use("/api/auth",authRouter);
app.use("/api/users",usersRouter);
app.use("/api/hotels",hotelsRouter);
app.use("/api/rooms",roomsRouter);

// app.use((err,req,res,next)=>{
//     const errorStatus = err.status || 500;
//     const errorMessage = err.messsage || "I am middleware. There is something wrong!";
//     return res.status(errorStatus).json(errorMessage);
// })

app.listen(port,()=>{
    connectionDB();
    console.log("connected to backend!");
})