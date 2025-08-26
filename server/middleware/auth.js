import User from "../models/User.js";
import jwt from "jsonwebtoken";

// middleware to protect routes
export const protectRoute = async (req,res,next)=>{
    try{
        const token=req?.headers?.token;
        const decodedData= jwt.verify(token,process.env.JWT_SECRET);
        
        const user=User.findById(decodedData.userId).select("-password");
        if(! user) return res.json({success:false, message:"User not found"});
        req.user=user;
        next();
    }catch(err){
        console.log(err.message);
        res.json({success:false, message:err.message});
    }
}