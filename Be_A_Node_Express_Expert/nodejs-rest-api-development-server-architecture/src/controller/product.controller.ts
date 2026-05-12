import { IncomingMessage, ServerResponse } from "http";
import { deleteProduct, insertProduct, readProducts, updateProduct } from "../service/product.service";
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
        const newProduct: IProduct = {
            id: data.length + 1, // Simple ID generation logic
            ...body
        };
        insertProduct(newProduct);
        res.writeHead(201,{"Content-Type":"application/json"});
        res.end(JSON.stringify({message: "Product created", data: newProduct}));
    }

    //Implement PUT Method for updating a product
    if(productId && urlParts[1] === "products" && method === 'PUT'){
        const body=await parseBody(req);
        const updatedProduct = await updateProduct(productId, body);
        if(updatedProduct){
            res.writeHead(200,{"Content-Type":"application/json"});
            res.end(JSON.stringify({message: "Product updated", data: updatedProduct}));
        } else {
            res.writeHead(404,{"Content-Type":"application/json"});
            res.end(JSON.stringify({message: "Product not found"}));
        }
    }

    // Implement DELETE Method for deleting a product 
    if(productId && urlParts[1] === "products" && method === 'DELETE'){
        // Implementation for deleting a product
        const deletedProduct = deleteProduct(productId);
        if(deletedProduct){
            res.writeHead(200,{"Content-Type":"application/json"});
            res.end(JSON.stringify({message: "Product deleted", data: deletedProduct}));
        } else {
            res.writeHead(404,{"Content-Type":"application/json"});
            res.end(JSON.stringify({message: "Product not found"}));
        }
    }

};