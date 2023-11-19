const userModel = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// REGISTER
const register = async(req,res,next)=>{
    try {

        // Encryption of user's password into hash
        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(req.body.password,salt);

        const newUser = new userModel({
            username: req.body.username,
            email: req.body.email,
            password: hashPass
        });
        newUser.save();
        res.status(200).send("User created Successfully!");
    } catch (error) {
        next(error)
    }
}
// LOGIN
const login = async(req,res,next)=>{
    try {
        const user = await userModel.findOne({username: req.body.username});
        if(!user){res.status(404).send("User Not Found!")};
        // decryption of hash password into user's password
        // and then compare both passwords
        const isPassCorrect = await bcrypt.compare(req.body.password,user.password);
        if(!isPassCorrect){res.status(400).send("Incorrect Username Or Password")};
        
        // juser is the details stored in JWT token
        const juser = {
            id:user.id,
            isAdmin:user.isAdmin
        }
        const token = jwt.sign(juser,process.env.JWT_SECRET);

        const {password,isAdmin,...OtherDetails} = user._doc;
        res.cookie("access_token",token,{
            // "access_token is the name of cookie"
            // token is the twt token
            // httpOnly does not allow any user to reach or access cookie
            httpOnly:true,
        }).status(200).json({...OtherDetails});
    } catch (error) {
        next(error)
    }
}

module.exports = {register,login};