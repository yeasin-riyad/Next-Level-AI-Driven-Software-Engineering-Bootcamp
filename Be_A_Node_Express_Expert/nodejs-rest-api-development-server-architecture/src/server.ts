import { createServer, IncomingMessage, Server } from "http";
import { RouteHandler } from "./routes/route";

const server:Server = createServer((req:IncomingMessage,res)=>{

   RouteHandler(req,res);

});

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
});