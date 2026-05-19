import type { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { createUserIntoDB, deleteUserByIdFromDB, getAllUsersFromDB, getUserByIdFromDB, updateUserByIdFromDB } from "./user.service";
import type { IUser } from "./user.interface";
import sendResponse from "../../utility/sendResponse";

export const createUser=async(req:Request,res:Response)=>{
   try{
     const {email,name,password,age,role} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
     const payload={email,name,password:hashedPassword,age,role}
     
    const result =await createUserIntoDB(payload);
    delete result.rows[0].password; // Remove password from the response
 sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "User Created successfully!",
      data: result.rows[0],
    });   }catch(error){
    // console.error('Error inserting data into PostgreSQL database:', error);
    sendResponse(res, {
      statusCode: 500,
      success: false,
      message: error instanceof Error ? error.message : "Internal Server Error",
    });
   }

}

export const getAllUsers=async(req:Request,res:Response)=>{
    try{
        const result = await getAllUsersFromDB();
        result.rows.forEach((row) => {
            delete row.password;
        });
        sendResponse(res, {
          statusCode: 200,
          success: true,
          message: "Users retrieved successfully",
          data: result.rows
        });
    }catch(error){
        sendResponse(res, {
          statusCode: 500,
          success: false,
          message: error instanceof Error ? error.message : "Internal Server Error",
        });
    }
}

export const getUserById=async(req:Request,res:Response)=>{
    const userId = req.params.id as string;
    try{
        const result =await getUserByIdFromDB(userId);
        if(result.rows.length === 0){
            sendResponse(res, {
              statusCode: 404,
              success: false,
              message: "User not found"
            });
        }else{
            delete result.rows[0].password; // Remove password from the response
            sendResponse(res, {
              statusCode: 200,
              success: true,
              message: "User retrieved successfully",
              data: result.rows[0]
            });
         
        }
    }catch(error){
        // console.error('Error retrieving user from PostgreSQL database:', error);
        sendResponse(res, {
          statusCode: 500,
          success: false,
          message: error instanceof Error ? error.message : "Internal Server Error",
        });
    }
};

export const updateUserById=async(req:Request,res:Response)=>{
    const userId = req.params.id as string;
    const {email,name,password,age} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const payload:IUser={
        email,name,password:hashedPassword,age,userId
    }
    try{
        const result=await updateUserByIdFromDB(payload)
        if(result.rows.length === 0){
            sendResponse(res, {
              statusCode: 404,
              success: false,
              message: "User not found"
            });
        }else{
            delete result.rows[0].password; // Remove password from the response
            sendResponse(res, {
              statusCode: 200,
              success: true,
              message: "User updated successfully",
              data: result.rows[0]
            });
        }
    }catch(error){
        // console.error('Error updating user in PostgreSQL database:', error);
        sendResponse(res, {
          statusCode: 500,
          success: false,
          message: error instanceof Error ? error.message : "Internal Server Error",
        });
    
    }
};

export const deleteUserById=async(req:Request,res:Response)=>{
    const userId = req.params.id as string;
    try{
        const result = await deleteUserByIdFromDB(userId);
        if(result.rows.length === 0){
            sendResponse(res, {
              statusCode: 404,
              success: false,
              message: "User not found"
            });
        
        }else{
            sendResponse(res, {
              statusCode: 200,
              success: true,
              message: "User deleted successfully",
              data: result.rows[0]
            });
        }
    }catch(error){
        // console.error('Error deleting user from PostgreSQL database:', error);
        sendResponse(res, {
          statusCode: 500,
          success: false,
          message: error instanceof Error ? error.message : "Internal Server Error",
        });
    }
};