const http=require('http');
const host="localhost";
const port=3001;

const server=http.createServer((req,res)=>{
res.statusCode=200;
res.setHeader('Content-Type','text/plain')
res.sendDate('Helo-world');
});
server.listen(port,host,()=>{
console.log("sucesses");
});