import express from 'express'
let app = express()

import guestrouter from './hw1.js'
app.use("/athiti", guestrouter)

import productrouter from './hw2.js'
app.use('/array',productrouter)



app.listen(5050,()=>{
    console.log("Listening on 5050")
})