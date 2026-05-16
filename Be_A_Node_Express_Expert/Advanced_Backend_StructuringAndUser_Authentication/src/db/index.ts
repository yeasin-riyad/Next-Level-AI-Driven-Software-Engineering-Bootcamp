import { Pool } from "pg";
import config from "../config";

export const pool = new Pool({
  
    connectionString:config.connection_string,
})

export const initDB = async () => {
    try {
        // const client = await pool.connect();
        // console.log('Connected to PostgreSQL database');
        // client.release();
        await pool.query(
            `CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(200),
            email VARCHAR(225) NOT NULL UNIQUE,
            password VARCHAR(20) NOT NULL,
            age INTEGER NOT NULL,
            is_active BOOLEAN DEFAULT true,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
        )
        `
        );
        console.log('Users table created successfully');
    } catch (error) {
        console.error('Error connecting to PostgreSQL database:', error);
    }
}