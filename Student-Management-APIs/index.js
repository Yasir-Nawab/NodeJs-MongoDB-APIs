const express = require("express");
const app = express();
const port = 3000;
const conFunc = require("./db");
conFunc();

app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use("/api/v1",require("./routes/mainRoute"));


app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
});