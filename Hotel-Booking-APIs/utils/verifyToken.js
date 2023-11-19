const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next) =>{
    const token = req.cookies.access_token;
    if(token)
    {   
        const data = jwt.verify(token,process.env.JWT_SECRET);
        req.user = data;
        next();
    }
    else{
        res.status(404).send("INVALID TOKEN!");
    }
}

const verifyUser = (req,res,next) => {
    verifyToken(req,res,()=>{

        if(req.user.id === req.params.id || req.user.isAdmin)
        {
            next();
        }
        else
        {
            res.send("something error in verifyUser middleware")
        }

    });
}

const verifyAdmin = (req,res,next) => {
    verifyToken(req,res,()=>{

        if(req.user.isAdmin)
        {
            next();
        }
        else
        {
            res.send("something error in verifyAdmin middleware")
        }

    });
}

module.exports = {verifyToken,verifyUser,verifyAdmin};