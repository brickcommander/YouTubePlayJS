import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// the app will accept json with limit 16kb
app.use(express.json({
    limit: "16kb"
}))

// app will also accept extended urls 
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

app.use(express.static("public"))

// server can access(CRUD) secure cookies of users browser 
app.use(cookieParser())

export { app }