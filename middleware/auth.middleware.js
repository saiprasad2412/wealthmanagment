const jwt = require('jsonwebtoken');
const User = require('../models/userModel');



 const  verifyJWT = async (req, res, next) => {
    try {
        const token= req.cookies?.accessToken ||
        req.header("Authorization")?.replace("Bearer ", "");
        
        if(!token){
            return res.status(401).json({success:false, message:"Unauthorized request "})
        }

        const decodedToken = await jwt.verify(token, process.env.SECRET);
        
        const user= await User.findById(decodedToken._id).select("-password -refreshToken");
        
        if(!user){
            return res.status(401).json({success:false, message:"Invalid Access Token "})
        }
        req.user=user;
        next();
        
    } catch (error) {
        return res.status(401).json({success:false, message: error?.message})
    }
}
module.exports= {verifyJWT}