require("express-async-errors");
const express = require("express");
const cors = require("cors")
const { default: mongoose } = require("mongoose");
const errorHandler = require("./handlers/errorHandler");
const createUser = require("./controller/createUser");
const getUser = require("./controller/getUser");
require("dotenv").config();



const app = express();
app.use(cors());

app.use(express.json());


//model initialisation
require("./models/users.model");





app.post("/api/create", createUser);
app.get("/api/getusers", getUser);

app.all("*", (request, response, next)=> 
    {
        response.status(404).json(
            {
                status: "Failed",
                message: "Page Not Found"
            })
    })

//end of routing....
app.use(errorHandler);

mongoose.connect(process.env.mongo_connect, {}).then(()=> 
        console.log("DataBase Connected Successfully")
    ).catch(()=> console.log("Database Not Connected"));



app.listen(8000, ()=> 
    {
        console.log("Server is Connected Sucessfully")
    })