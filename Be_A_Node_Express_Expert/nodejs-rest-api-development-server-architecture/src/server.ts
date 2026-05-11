import { createServer, IncomingMessage, Server } from "http";

const server:Server = createServer((req:IncomingMessage,res)=>{

    // console.log("Requested URL:", req.url);  // '/','/users','/products','/any-other-url'
    // console.log("Requested Method:", req.method); // 'GET','POST','PUT','DELETE','PATCH','OPTIONS'
    const url = req.url;
    const method = req.method;
    if(url === '/' && method === 'GET'){
            // console.log("This is Root Route");
            //we can send any type of response to the client like text, json, html, etc.
        res.writeHead(200,{"Content-Type":"text/plain"}); // status code 200 means everything is ok
        res.end("This is Root Route");
    }else if(url === '/users' && method === 'GET'){
        // console.log("This is Users Route");
        res.writeHead(200,{"Content-Type":"application/json"}); 
        res.end(JSON.stringify({message: "This is Users Route"}));
    }
    else{
        res.writeHead(404,{"Content-Type":"text/plain"}); // status code 404 means not found
        res.end("Route Not Found");
    }

});

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
});