const {createHotel,updateHotel,deleteHotel,getHotel,getHotels} = require("../controllers/hotelsController");
const express = require("express");
const {verifyAdmin} = require("../utils/verifyToken");
const router = express.Router();

// Create
router.post("/",verifyAdmin, createHotel);
// Update
router.put("/:id",verifyAdmin,updateHotel);
// Delete
router.delete("/:id",verifyAdmin,deleteHotel);
// Get
router.get("/:id",getHotel);
// Get All
router.get("/",getHotels);

module.exports = router;