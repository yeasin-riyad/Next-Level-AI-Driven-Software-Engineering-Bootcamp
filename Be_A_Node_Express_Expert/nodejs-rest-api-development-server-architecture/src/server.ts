import { createServer, IncomingMessage, Server } from "http";
import { RouteHandler } from "./routes/route";
import config from "./config";

const server:Server = createServer((req:IncomingMessage,res)=>{

   RouteHandler(req,res);

});
const PORT=config.port;

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});