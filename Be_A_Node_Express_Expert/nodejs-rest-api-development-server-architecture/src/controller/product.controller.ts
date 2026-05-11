import { IncomingMessage, ServerResponse } from "http";
import { readProducts } from "../service/product.service";

export const ProductController = (req:IncomingMessage,res:ServerResponse)=>{
    const url = req.url;
    const method = req.method;
    const data = readProducts();

    if(url === '/products' && method === 'GET'){
      res.writeHead(200,{"Content-Type":"application/json"}); 
        res.end(JSON.stringify({message: "This is Products Route", data}));
    };
};