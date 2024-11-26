import User from "../models/usermodel.js";
import bcryptjs from "bcryptjs";

export const signup = async (req,res) => {
    try {
        const {fullname, email, password} = req.body;
        const user = await User.findOne({email})
        if (user) {
            return res.status(400).json({message: "user already exists"})
        }
        const hashPassword = await bcryptjs.hash(password, 10)
        const createduser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        })
        await createduser.save()
        res.status(201).json({message:"user created successfully", user:{
            _id:createduser._id,
            fullname:createduser.fullname,
            email:createduser.email
        }})
    } catch (error) {
        console.log("Error:" + error.message)
        res.status(500).json({message:"internal server error"})
    }
};

export const login = async (req, res)=> {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        const ismatch = await bcryptjs.compare(password, user.password) //first one is coming from user and the second one is the password in database.
        if(!user || !ismatch){
            return res.status(400).json({message: "invalid username or password"});
        }else{
            res.status(200).json({message:"Login Successfull", user: {
                id : user._id,
                fullname : user.fullname,
                email : user.email,
            }})
        }
    } catch (error) {
        console.log("error" + error.message)
        res.status(500).json({message:"internal server error"});
    }
}
