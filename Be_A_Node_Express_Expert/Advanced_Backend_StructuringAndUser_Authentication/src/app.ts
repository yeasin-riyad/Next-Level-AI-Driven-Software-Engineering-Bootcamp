import express, { type Application, type Request, type Response } from 'express'
import {  pool } from './db'
const app:Application = express()

app.use(express.json()); // for parsing application/json
app.use(express.text()); // for parsing text/plain
app.use(express.urlencoded({extended:true})); // for parsing application/x-www-form-urlencoded







app.get('/', (req:Request, res:Response) => {
  res.status(200).json({
    "message":"Express Server",
    "author":"Next Level"
  })
})

app.post("/api/users",async(req:Request,res:Response)=>{
   try{
     const {email,name,password,age} = req.body;
    const result = await pool.query(
        `INSERT INTO users (name,email,password,age) VALUES ($1,$2,$3,$4) RETURNING *`,
        [name,email,password,age]
    );
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

})

// Get all users
app.get("/api/users",async(req:Request,res:Response)=>{
    try{
        const result = await pool.query('SELECT * FROM users');
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
})

// Get user by ID
app.get("/api/users/:id",async(req:Request,res:Response)=>{
    const userId = req.params.id;
    try{
        const result = await pool.query('SELECT * FROM users WHERE id = $1',[userId]);
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
});

// Update user by ID
app.put("/api/users/:id",async(req:Request,res:Response)=>{
    const userId = req.params.id;
    const {email,name,password,age} = req.body;
    try{
        const result = await pool.query(
            `UPDATE users 
            SET 
            email=COALESCE($1,email), 
            name=COALESCE($2,name), 
            password=COALESCE($3,password), 
            age=COALESCE($4,age) WHERE id=$5 RETURNING *`,
            [email,name,password,age,userId]
        );
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
});

// Delete user by ID
app.delete("/api/users/:id",async(req:Request,res:Response)=>{
    const userId = req.params.id;
    try{
        const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *',[userId]);
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
});


export default app;

