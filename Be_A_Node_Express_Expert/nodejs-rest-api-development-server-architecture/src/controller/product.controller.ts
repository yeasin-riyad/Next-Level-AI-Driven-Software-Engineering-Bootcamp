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
        try {
            const products = readProducts();
            sendResponse(res,"Products retrieved successfully",200,products,true);
        } catch (error) {
            sendResponse(res,"Failed to retrieve products",500,null,false);
        }
    }

   

    // Get a single product by id
    if(productId && urlParts[1] === "products" && method === 'GET'){
        try{
          const product = data.find((item:IProduct)=> item.id === productId);
        if(product){
          return  sendResponse(res,"Product found",200,product,true);
        } else {
          return  sendResponse(res,"Product not found",404,null,false);
        }
        }catch(error){
          return  sendResponse(res,"Failed to retrieve product",500,null,false);
        }
    }


         //Create a new product
   if(url === '/products' && method === 'POST'){
        try {
          // Implementation for creating a new product
        const body=await parseBody(req);
        const newProduct: IProduct = {
            id: data.length + 1, // Simple ID generation logic
            ...body
        };
        insertProduct(newProduct);
      return   sendResponse(res,"Product created",201,newProduct,true);
        } catch (error) {
          return  sendResponse(res,"Failed to create product",500,null,false);
        }
    }

    //Implement PUT Method for updating a product
    if(productId && urlParts[1] === "products" && method === 'PUT'){
        const body=await parseBody(req);
        const updatedProduct = await updateProduct(productId, body);
        if(updatedProduct){
           return sendResponse(res,"Product updated",200,updatedProduct,true);
        } else {
            return sendResponse(res,"Product not found",404,null,false);
        }
    }

    // Implement DELETE Method for deleting a product 
    if(productId && urlParts[1] === "products" && method === 'DELETE'){
        // Implementation for deleting a product
        const deletedProduct = deleteProduct(productId);
        if(deletedProduct){
            return sendResponse(res,"Product deleted",200,deletedProduct,true);
        } else {
            return sendResponse(res,"Product not found",404,null,false);
        }
    }

};