import express from 'express'
let app=express()
import maths from './maths.js'
import obj from './array.js'
import obj2 from './Product.js'

app.use('/maths',maths)
app.use('/shamim',obj)
app.use('/pname',obj2)

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})