const express= require('express')
const morgan= require('morgan')
const app=express()
const logger=require('morgan')
const b=express.urlencoded({extended:true})

if(app.get('env')=='development'){
   app.use(logger('dev'))
}


app.get('/',(req,res)=>{
   res.send('home page')
})
var students=[
   {id:0,firstname:'aziz',lastname:'benbrahim',speciality:'programmer'},
   {id:1,firstname:'salah',lastname:'blabla',speciality:'designer'},
   {id:2,firstname:'mohamed',lastname:'benyoussef',speciality:'programmer'},
   {id:3,firstname:'kamel',lastname:'mazghouni',speciality:'programmer'},
]
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

app.post('/student/addStudent',b,(req,res)=>{
   let newstudent={
      id:req.body.id,
      firstname:req.body.firstname,
      lastname:req.body.lastname,
      speciality:req.body.speciality
   }
   students.push(newstudent)
   res.send(students)
})

app.put('/student/update/:id',b,(req,res)=>{
   let student=students.find(student=>student.id==req.params.id)
   student.firstname=req.body.firstname
   student.lastname=req.body.lastname
   student.speciality=req.body.speciality
   res.send(student)
})

app.put('/student/update/:id',b,(req,res)=>{
   let student=students.find(student=>student.id==req.params.id)
   student.firstname=req.body.firstname
   student.lastname=req.body.lastname
   student.speciality=req.body.speciality
   res.send(student)
})


   
   
   






app.listen(3000,()=>console.log('server run on port 3000'))