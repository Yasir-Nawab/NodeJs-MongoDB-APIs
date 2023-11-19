const userModel = require("../models/User");

// UPDATE
const updateUser = async (req,res,next)=>{
    try {
        const updateUser = await userModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true}); //{new:true} because to res.json send updated data not previous one
        res.status(200).json(updateUser);
    } catch (error) {
        next(error);
    }
}
// DELETE
const deleteUser = async (req,res,next)=>{
    try {
        await userModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Deleted Successfully!");
    } catch (error) {
        next(error);
    }
}
// GET
const getUser = async (req,res,next)=>{
    try {
        const GetUser = await userModel.findById(req.params.id);
        res.status(200).json(GetUser);
    } catch (error) {
        next(error);
    }
}
// GET ALL
const getUsers = async (req,res,next)=>{
    try {
        const GetUsers = await userModel.find();
        res.status(200).json(GetUsers);
    } catch (error) {
        next(error);
    }
}

module.exports = {updateUser,deleteUser,getUser,getUsers};