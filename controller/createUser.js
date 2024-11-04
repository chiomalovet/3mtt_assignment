const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const createUser = async(request, response)=> 
    {
        const createUserModel = mongoose.model("users");


        const {username, email, password}= request.body;

        if(!username)throw "username is required";
        if(!email) throw "email is required";
        if(!password) throw "password is required";
        if(password.length < 5) throw "password should be 5 chararter long";

        const duplicateEmail = await createUserModel.findOne(
            {
                email:email
            });

            if(duplicateEmail) throw "Email already exist"

            const hashedPassword = await bcrypt.hash(password, 12)

       await createUserModel.create(
            {
                username: username,
                email: email,
                password: hashedPassword
            })
            

        response.status(200).json(
            {
                status: "Successfully",
                message: "User Created Successfully"
            })
    }



    module.exports= createUser;