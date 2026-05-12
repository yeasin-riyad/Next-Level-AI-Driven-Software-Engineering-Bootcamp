import dotenv from 'dotenv';
import path from 'path';


// Load environment variables from .env file
dotenv.config({
    path: path.join(process.cwd(), '.env')
});

const config = {
    port: process.env.PORT || 3000,
    // Add other configuration variables as needed
};

export default config;