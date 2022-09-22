const express = require('express')//mandatory
require('dotenv').config()

const app =express()//mandatory for creating express app
const mongoose = require('mongoose')
const workRouter = require('./routes/workout');


//middle ware
app.use(express.json()) // to  get access to the req object in post and patch request

app.use((req, res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/workouts',workRouter)

//connect ot db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listening for request
        app.listen(process.env.PORT,()=>{
            console.log('listening on port',process.env.PORT)
        })
    })
    .catch(err=>{
        console.log(err)
    })

