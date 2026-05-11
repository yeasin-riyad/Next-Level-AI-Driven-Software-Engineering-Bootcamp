import { IncomingMessage, ServerResponse } from "node:http";
import { ProductController } from "../controller/product.controller";

export const RouteHandler=(req:IncomingMessage,res:ServerResponse)=>{
     // console.log("Requested URL:", req.url);  // '/','/users','/products','/any-other-url'
    // console.log("Requested Method:", req.method); // 'GET','POST','PUT','DELETE','PATCH','OPTIONS'

    const url = req.url;
    const method = req.method;

    if(url === '/' && method === 'GET'){
            // console.log("This is Root Route");
            //we can send any type of response to the client like text, json, html, etc.
        res.writeHead(200,{"Content-Type":"text/plain"}); // status code 200 means everything is ok
        res.end("This is Root Route");
    }else if(url?.startsWith('/products') ){
        ProductController(req,res);
      
    }
    else{
        res.writeHead(404,{"Content-Type":"text/plain"}); // status code 404 means not found
        res.end("Route Not Found");
    }

};