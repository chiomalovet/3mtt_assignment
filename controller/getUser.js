const mongoose = require("mongoose");


const getUser = async(request, response)=> 
    {
        const getUserModel = mongoose.model("users");

        const data = await getUserModel.findOne({}).select("-password")

        response.status(200).json(
            {
                status: "Successful",
                message: data
            })
    }




    module.exports= getUser;