const express= require('express')
const path= require('path')
const app=express()


app.set('view engine','ejs')
app.set('views','views')



app.use(express.static(path.join(__dirname,'assets')))


app.get('/',(req,res,next)=>{
   res.render('index',{name:'Aziz',lastname:'ben brahim'})
   
   
   

})





app.listen(3000,()=>console.log('server run on port 3000'))