import express from "express";
import "dotenv/config";
import cors from "cors";
import http from"http";
import { connectDb } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";

// create server
const app=express();
const server=http.createServer(app);
//middleware
app.use(express.json({limit:"5mb"}));
app.use(cors());

//Routes setup
app.use("/api/status",(req,res)=>res.send("Server is live"));
app.use("/api/auth",userRouter);

const PORT=process.env.PORT || 5000; 
// connect db
connectDb().then(
server.listen(PORT,()=> console.log(`Server is running at port ${PORT}`))
);


