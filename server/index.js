const express = require('express')
const app = express()
const mogoose = require('mongoose')
const dotenv = require('dotenv')
const routeurls = require('./router/router')
const cors =require('cors')


dotenv.config()

mogoose.connect(process.env.DATABASE_ACCESS, ()=> console.log("Database Connected"))


app.use(express.json())
app.use(cors())
app.use('/app', routeurls)
app.listen(4000, () => console.log("server running"));