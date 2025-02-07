const express= require('express')

const app=express()

app.use((req,res,next)=>{
   console.log('welcome from home')
   next()

})
app.use((req,res,next)=>{
   console.log('welcome from 3abla')
   next()

})
app.use((req,res)=>{
   console.log('welcome 3chiri')

})


app.listen(3000,()=>console.log('server run on port 3000'))