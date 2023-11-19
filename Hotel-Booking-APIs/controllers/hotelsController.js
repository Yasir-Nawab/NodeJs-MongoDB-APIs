const hotelModel = require("../models/Hotel");

// CREATE
const createHotel = async (req,res,next)=>{
    const newHotel = new hotelModel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        next(error);
    }
}
// UPDATE
const updateHotel = async (req,res,next)=>{
    const newHotel = new hotelModel(req.body);

    try {
        const updateHotel = await hotelModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true}); //{new:true} because to res.json send updated data not previous one
        res.status(200).json(updateHotel);
    } catch (error) {
        next(error);
    }
}
// DELETE
const deleteHotel = async (req,res,next)=>{
    const newHotel = new hotelModel(req.body);

    try {
        await hotelModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Deleted Successfully!");
    } catch (error) {
        next(error);
    }
}
// GET
const getHotel = async (req,res,next)=>{
    const newHotel = new hotelModel(req.body);

    try {
        const GetHotel = await hotelModel.findById(req.params.id);
        res.status(200).json(GetHotel);
    } catch (error) {
        next(error);
    }
}
// GET ALL
const getHotels = async (req,res,next)=>{
    const newHotel = new hotelModel(req.body);

    try {
        const GetHotels = await hotelModel.find();
        res.status(200).json(GetHotels);
    } catch (error) {
        next(error);
    }
}

module.exports = {createHotel,updateHotel,deleteHotel,getHotel,getHotels};