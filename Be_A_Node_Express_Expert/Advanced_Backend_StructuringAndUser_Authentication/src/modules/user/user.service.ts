import { pool } from "../../db";
import type { IUser } from "./user.interface";


export const createUserIntoDB=async({name,email,password,age}:IUser)=>{
    const result = await pool.query(
        `INSERT INTO users (name,email,password,age) VALUES ($1,$2,$3,$4) RETURNING *`,
        [name,email,password,age]
    );
    return result;
}

export const getAllUsersFromDB= async()=>{
            const result = await pool.query('SELECT * FROM users');
            return result;

}

export const getUserByIdFromDB=async(userId:string)=>{
            const result = await pool.query('SELECT * FROM users WHERE id = $1',[userId]);
            return result;

}

export const updateUserByIdFromDB=async({email,name,password,age,userId}:IUser)=>{
    const result = await pool.query(
            `UPDATE users 
            SET 
            email=COALESCE($1,email), 
            name=COALESCE($2,name), 
            password=COALESCE($3,password), 
            age=COALESCE($4,age) WHERE id=$5 RETURNING *`,
            [email,name,password,age,userId]
        );
        return result;
}

export const deleteUserByIdFromDB=async(userId:string)=>{
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *',[userId]);
    return result;
};