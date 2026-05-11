import path from "path";
import fs from "fs";
import { IProduct } from "../types/product.types";

const filePath=path.join(process.cwd(),"src","database","db.json"); 
export const readProducts = ()=>{
    // console.log(filePath,"this is file path");
    // const products= fs.readFileSync(filePath); // this will read the file and return a buffer
        const products= fs.readFileSync(filePath,"utf-8"); // this will read the file and return a string
    // console.log(products,"this is products");
    return JSON.parse(products);
}

export const insertProduct = (product:IProduct)=>{
    const products = readProducts();
    products.push(product);
    fs.writeFileSync(filePath,JSON.stringify(products)); // this will write the updated products array back to the file
    return product;
}