const {updateUser,deleteUser,getUser,getUsers} = require("../controllers/usersController");
const express = require("express");
const router = express.Router();
const {verifyToken,verifyUser,verifyAdmin} = require("../utils/verifyToken");
const userModel = require("../models/User");

//ONly for test
// router.get("/checkauthentication",verifyToken,async(req,res,)=>{
//     res.send("Hello User, you are logged In");
// })

// router.get("/checkuser/:id",verifyUser,async(req,res,)=>{
//     res.send("Hello User, you are logged In and can delete your account");
// })

// router.get("/checkadmin/:id",verifyAdmin,async(req,res,)=>{
//     res.send("Hello Admin, you are logged In and can delete All accounts");
// })




// Update
router.put("/:id",verifyUser,updateUser);
// Delete
router.delete("/:id",verifyUser,deleteUser);
// Get
router.get("/:id",verifyUser,getUser);
// Get All
router.get("/",verifyAdmin,getUsers);

module.exports = router;