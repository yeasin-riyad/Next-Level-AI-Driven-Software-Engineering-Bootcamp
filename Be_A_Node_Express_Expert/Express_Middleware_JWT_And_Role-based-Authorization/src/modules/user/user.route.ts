import { Router } from "express";
import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from "./user.controller";


export const userRouter=Router();

userRouter.post("/",createUser);
userRouter.get("/",getAllUsers);
userRouter.get("/:id",getUserById);
userRouter.put("/:id",updateUserById);
userRouter.delete("/:id",deleteUserById);



