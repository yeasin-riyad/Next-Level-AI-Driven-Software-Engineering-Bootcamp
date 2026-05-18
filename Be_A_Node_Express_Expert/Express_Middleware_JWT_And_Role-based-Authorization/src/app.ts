import express, { type Application, type Request, type Response } from 'express'
import {  pool } from './db'
import { userRouter } from './modules/user/user.route';
import { profileRoute } from './modules/profile/profile.route';
import { authRouter } from './modules/auth/auth.route';
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

app.use('/api/user',userRouter);
app.use('/api/profile', profileRoute);
app.use('/api/auth', authRouter);


export default app;

