const express= require('express')
const app=express()
const b=express.urlencoded({extended:true})


var students=[
   {id:0,firstname:'aziz',lastname:'benbrahim',speciality:'programmer'},
   {id:1,firstname:'salah',lastname:'blabla',speciality:'designer'},
   {id:2,firstname:'mohamed',lastname:'benyoussef',speciality:'programmer'},
   {id:3,firstname:'kamel',lastname:'mazghouni',speciality:'programmer'},
]
app.get('/',(req,res)=>{
   res.send('home page')
})

app.get('/students',(req,res)=>{
   res.send(students)
})

app.get('/student/:id',(req,res)=>{
   let newstudent=students.find(student=>student.id==req.params.id)
   if(newstudent){
      res.send(newstudent)
   }else{
      res.send("we don't have this student")
   }
})

app.get('/student/delete/:id',(req,res)=>{
   let student=students.find(student=>student.id==req.params.id)
   let positionstudent=students.indexOf(student)
   students.splice(positionstudent,1)
   res.send(students)
})


   
   
   






app.listen(3000,()=>console.log('server run on port 3000'))