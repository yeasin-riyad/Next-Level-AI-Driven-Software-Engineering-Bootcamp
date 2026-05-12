import { IncomingMessage, ServerResponse } from "http";
import { deleteProduct, insertProduct, readProducts, updateProduct } from "../service/product.service";
import { IProduct } from "../types/product.types";
import { parseBody } from "../utility/parseBody";
import { sendResponse } from "../utility/sendResponse";

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
            sendResponse(res,"Product found",200,product,true);
        } else {
            sendResponse(res,"Product not found",404,null,false);
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
        sendResponse(res,"Product created",201,newProduct,true);
    }

    //Implement PUT Method for updating a product
    if(productId && urlParts[1] === "products" && method === 'PUT'){
        const body=await parseBody(req);
        const updatedProduct = await updateProduct(productId, body);
        if(updatedProduct){
           sendResponse(res,"Product updated",200,updatedProduct,true);
        } else {
            sendResponse(res,"Product not found",404,null,false);
        }
    }

    // Implement DELETE Method for deleting a product 
    if(productId && urlParts[1] === "products" && method === 'DELETE'){
        // Implementation for deleting a product
        const deletedProduct = deleteProduct(productId);
        if(deletedProduct){
            sendResponse(res,"Product deleted",200,deletedProduct,true);
        } else {
            sendResponse(res,"Product not found",404,null,false);
        }
    }

};