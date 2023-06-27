const jsonServer = require('json-server')

const server = jsonServer.create();

const router = jsonServer.router("db.json");

const middleWare = jsonServer.defaults();

const port = 8080;


server.use(middleWare);

server.use(router);


server.listen(port,()=>{
    console.log('server is running')
})