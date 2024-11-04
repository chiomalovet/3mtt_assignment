const mongoose = require("mongoose");

const usersSchema= new mongoose.Schema( 
    {
        username:
        {
            type: String,
            required: [true, "Please Provide Username"]
        },
        email:
        {
            type: String,
            required: [true,"Please Provide Email"],
            unquie: true, 
        },
        password:
        {
            type: String,
            required: [true, "Please Provide Password"]
        }
    },
    {
        timestamps: true,
    }

)




const usersModel = mongoose.model("users", usersSchema)

module.exports = usersModel