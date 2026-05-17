import type { Request, Response } from "express";
import { pool } from "../../db";
import { createUserIntoDB, deleteUserByIdFromDB, getAllUsersFromDB, getUserByIdFromDB, updateUserByIdFromDB } from "./user.service";
import type { IUser } from "./user.interface";

export const createUser=async(req:Request,res:Response)=>{
   try{
     const {email,name,password,age} = req.body;
     const payload={email,name,password,age}
    const result =await createUserIntoDB(payload);
    res.status(201).json({
        "message":"Data received successfully",
        "data":result.rows[0]
    })
   }catch(error){
    // console.error('Error inserting data into PostgreSQL database:', error);
    res.status(500).json({
        "message":error instanceof Error ? error.message : "Internal Server Error"
    })
   }

}

export const getAllUsers=async(req:Request,res:Response)=>{
    try{
        const result = await getAllUsersFromDB();
        res.status(200).json({
            "message":"Users retrieved successfully",
            "data":result.rows
        })
    }catch(error){
        // console.error('Error retrieving users from PostgreSQL database:', error);
        res.status(500).json({
            "message":error instanceof Error ? error.message : "Internal Server Error"
        })
    }
}

export const getUserById=async(req:Request,res:Response)=>{
    const userId = req.params.id as string;
    try{
        const result =await getUserByIdFromDB(userId);
        if(result.rows.length === 0){
            res.status(404).json({
                "message":"User not found"
            })
        }else{
            res.status(200).json({
                "message":"User retrieved successfully",
                "data":result.rows[0]
            })
        }
    }catch(error){
        // console.error('Error retrieving user from PostgreSQL database:', error);
        res.status(500).json({
            "message":error instanceof Error ? error.message : "Internal Server Error"
        })
    }
};

export const updateUserById=async(req:Request,res:Response)=>{
    const userId = req.params.id as string;
    const {email,name,password,age} = req.body;
    const payload:IUser={
        email,name,password,age,userId

    }
    try{
        const result=await updateUserByIdFromDB(payload)
        if(result.rows.length === 0){
            res.status(404).json({
                "message":"User not found"
            })
        }else{
            res.status(200).json({
                "message":"User updated successfully",
                "data":result.rows[0]
            })
        }
    }catch(error){
        // console.error('Error updating user in PostgreSQL database:', error);
        res.status(500).json({
            "message":error instanceof Error ? error.message : "Internal Server Error"
        })
    }
};

export const deleteUserById=async(req:Request,res:Response)=>{
    const userId = req.params.id as string;
    try{
        const result = await deleteUserByIdFromDB(userId);
        if(result.rows.length === 0){
            res.status(404).json({
                "message":"User not found"
            })
        }else{
            res.status(200).json({
                "message":"User deleted successfully",
                "data":result.rows[0]
            })
        }
    }catch(error){
        // console.error('Error deleting user from PostgreSQL database:', error);
        res.status(500).json({
            "message":error instanceof Error ? error.message : "Internal Server Error"
        })
    }
};