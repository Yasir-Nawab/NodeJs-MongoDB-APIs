const mongoose = require("mongoose");
const connnectionURL = "mongodb://localhost:27017/StudentDB";

const conFunc = () =>{
    try{
        mongoose.connect(connnectionURL);
    }catch{
        console.log("Database cannot connect")
    }
};

module.exports = conFunc;