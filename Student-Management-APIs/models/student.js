const mongoose = require("mongoose");
const {Schema}=mongoose;

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        require:"This field is required"
    },
    rollNo:{
        type:Number,
        require:"This field is required"
    },
    email:{
        type:String,
        require:"This field is required"
    },
    city:{
        type:String,
        require:"This field is required"
    },
    phone:{
        type:Number,
        require:"This field is required"
    }
});

const studentModel = mongoose.model("student",studentSchema);

module.exports = studentModel;