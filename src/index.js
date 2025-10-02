// require('dotenv').config({path: './env'}) // there are other ways to do it using import
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})

connectDB()