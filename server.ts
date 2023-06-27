import { IncomingMessage, ServerResponse } from "http";
const fs = require('fs')

const http = require('http')


const server = http.createServer( async (req: IncomingMessage, res: ServerResponse)=>{
   // console.log(req.url);
   try{
    if(req.url==='/todo'){
        //const db = await fs.promises.readFile('./db.json', 'utf-8');
    const db = await fs.promises.readFile('./db.json','utf-8')  
      console.log(db);
      res.end(db);
      }

   }catch(err){
   
    console.log(err);
    res.end("error");
   }
   
})


    server.listen(8080,()=>{
        console.log('Sever is running on index.tc at 8080')
    })