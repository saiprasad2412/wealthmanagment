const userModel= require('../models/userModel.js')

const loginController=async(req,res)=>{
    const {email,password}=req.body
    try {
        if(email=="" || password==""){
            return res.status(400).json({
                success:false,
                message:"please fill all thefields"
            })
        }

        const existingUser=await userModel.findOne({email})

        if(!existingUser){
            return res.status(400).json({
                success:false,
                message:"User not found , Register first"
            })
        }
        const isPasswordCorrect= await existingUser.isPasswordCorrect(password);

        if(!isPasswordCorrect){
            return res.status(400).json({
                success:false,
                message:"credentials are not valid"
            })
        }

        const accessToken=existingUser.generateAccessToken();

        const loggedInUser=await userModel.findById(existingUser._id).select("-password");

        const options={
            httpOnly:true,
            secure:true
        }

        return res.status(200).cookie("accessToken",accessToken,options).json({
            success:true,
            message:"User logged in successfully",
            user:loggedInUser
        })


        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"something went wrong"
        })
        
    }
}

const registerController=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        if(name==""||email=="" ||password==""){
            return res.status(400).json({
                success:false,
                message:"All fileds are required"
            })
        }
        //check for user already exist
        const existingUser= await userModel.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User Already exist, sign in please"
            })
        }

        const user=await userModel.create({
            name,
            email,
            password
        })

        const createdUser=await userModel.findById(user._id).select("-password");

        if(!createdUser){
            return res.status(400).json({
                success:false,
                message:"Something went wrong while creating user"
            })
        }
        return res.status(201).json({
            success:true,
            message:"User created successfully",
            user:createdUser
        })
        
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Something went wrong while registering user "
        })
        
    }
}

module.exports= {loginController, registerController}