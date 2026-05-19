import express, { type Application, type Request, type Response } from 'express'
import cors from 'cors'
import { userRouter } from './modules/user/user.route';
import { profileRoute } from './modules/profile/profile.route';
import { authRouter } from './modules/auth/auth.route';
import cookieParser from 'cookie-parser';
import logger from './middleware/logger';
import globalErrorHandler from './middleware/globalErrorHandler';
const app:Application = express()

app.use(express.json()); // for parsing application/json
app.use(express.text()); // for parsing text/plain
app.use(express.urlencoded({extended:true})); // for parsing application/x-www-form-urlencoded
app.use(cookieParser()); // Global Middleware for parsing cookies
app.use(logger); // Global Middleware for logging request details

app.use(
  cors({
    origin: "http://localhost:4000",
  }),
);
app.get('/', (req:Request, res:Response) => {
  res.status(200).json({
    "message":"Express Server",
    "author":"Next Level"
  })
})

app.use('/api/user',userRouter);
app.use('/api/profile', profileRoute);
app.use('/api/auth', authRouter);

// Global Error Handling Middleware
app.use(globalErrorHandler);


export default app;

