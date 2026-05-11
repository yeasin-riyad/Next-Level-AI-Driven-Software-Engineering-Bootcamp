import { IncomingMessage, ServerResponse } from "http";
import { readProducts } from "../service/product.service";
import { IProduct } from "../types/product.types";
import { parseBody } from "../utility/parseBody";

export const ProductController = async (req:IncomingMessage,res:ServerResponse)=>{
    const url = req.url;
    const method = req.method;
    const data = readProducts();
    

    const urlParts = url?.split("/") || [];
    const productId=urlParts && urlParts[1]=== "products" && urlParts[2] ? Number(urlParts[2]) : null;

    // Get all products
    if(url === '/products' && method === 'GET'){
      res.writeHead(200,{"Content-Type":"application/json"}); 
        res.end(JSON.stringify({message: "This is Products Route", data}));
    }

   

    // Get a single product by id
    if(productId && urlParts[1] === "products" && method === 'GET'){
        const product = data.find((item:IProduct)=> item.id === productId);
        if(product){
            res.writeHead(200,{"Content-Type":"application/json"});
            res.end(JSON.stringify({message: "Product found", data: product}));
        } else {
            res.writeHead(404,{"Content-Type":"application/json"});
            res.end(JSON.stringify({message: "Product not found"}));
        }
    }


         //Create a new product
   if(url === '/products' && method === 'POST'){
        // Implementation for creating a new product
        const body=await parseBody(req);
          res.writeHead(201,{"Content-Type":"application/json"});
        res.end(JSON.stringify({message: "Product created", data: body}));
    }

    
};