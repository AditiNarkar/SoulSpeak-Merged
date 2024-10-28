const express = require('express')
const userRoutes = require('./routes/usercontroller')

const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require('dotenv').config({path : '../.env'})
const app = express()

app.use(express.json())
app.use(bodyParser.json())

app.use(cors({
    origin:"http://localhost:3000",
    //methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
}))
app.use(cookieParser())

const connectDB = require('./config/db.js')
connectDB()

app.use("/api", userRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Running at", PORT)
})

