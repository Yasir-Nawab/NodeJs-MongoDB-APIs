const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("This is rooms home endpoint")
});
router.get("/register",(req,res)=>{
    res.send("This is rooms register endpoint")
});

module.exports = router;