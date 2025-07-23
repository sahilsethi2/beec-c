// require('dotenv').config({path: './env'})
import express from "express"
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";


const app = express()
dotenv.config({ path: '../.env' })

connectDB();

app.listen(3456,()=>{
    console.log(`Server is running!`);
})




/*
import express from "express"
const app = express()
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error: ", error);
            throw error
        })
        app.listen(process.env)
    }catch(error){
        console.log("Error: " + error);
        throw error 
    }
})
*/