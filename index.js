const http= require('http')


const server= http.createServer((req,res)=>{
   if (req.url=='/home'){
    res.statuscode=200
    res.write('welcome home')
   }else if(req.url=='/contact'){
    res.statuscode=200
    res.write('welcome contact')
   }else if(req.url=='/hakunamatata'){
    res.statuscode=200
    res.write('welcome hakunamatata')
   }else{
    res.statuscode=404
    res.write('erreur')


   }
   res.end()


})

server.listen(5000,()=>{console.log('server running')})