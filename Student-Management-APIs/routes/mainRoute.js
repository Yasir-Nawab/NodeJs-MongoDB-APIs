const express = require("express");
const Router = express.Router();
const Student = require("../models/student");
const jwt = require("jsonwebtoken");
const fetchStudent = require("../middleware/fetchStudent")

Router.post("/addStudent",async(req,res)=>{
    try{
        const {name,rollNo,email,city,phone} = req.body;
        const newStudent = new Student({
            name,rollNo,email,city,phone

        });
        const saveStudent = await newStudent.save();
        res.json(saveStudent);
    }
    catch{
        console.log("There is some error in addStudent Route");
    }
});

Router.get("/getAllStudents",async (req,res)=>{
    const students = await Student.find();
    res.json(students);
})

Router.post("/jwtoken", async (req,res)=>{
    const studentRoll = await Student.findOne({rollNo:req.body.rollNo});
    const secrete_Sign = "IamYa@sir";
    data={
        studentRoll:{
            rollNo : studentRoll.rollNo
        }
    }

    const final_jwt=jwt.sign(data,secrete_Sign);
    res.json(final_jwt);
});

Router.post("/verifyjwt",fetchStudent,async(req,res)=>{
    try{
        const studentroll = req.studentRoll.rollNo;

        const student = await Student.findOne({rollNo:studentroll});
        if(!student)
        {
            res.send("student cannot found in verfyjwt");
        }else{
            res.json(student);
        }
    }catch{
        res.send("catch run due to some error");
    }
})

module.exports = Router;