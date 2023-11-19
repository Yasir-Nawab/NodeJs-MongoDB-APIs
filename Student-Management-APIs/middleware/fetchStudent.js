const jwt = require("jsonwebtoken");
const secrete_Sign = "IamYa@sir";

const fetchStudent = (req,res,next)=>{
    const token = req.header('auth-token');
    if(token){
        try{
            const data = jwt.verify(token,secrete_Sign);
            req.studentRoll = data.studentRoll;
            next();
        }catch{
            res.status(404).send("please login by valid roll number");
        }
    }else{
        res.send("token can't fetch");
    }
}

module.exports = fetchStudent;