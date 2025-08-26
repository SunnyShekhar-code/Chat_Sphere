import jwt from "jsonwebtoken";

// function to generate a tokenn for user
export const generateToken= (userId)=>{
    const token= jwt.sign({userId},process.env.JWT_SECRET);
}