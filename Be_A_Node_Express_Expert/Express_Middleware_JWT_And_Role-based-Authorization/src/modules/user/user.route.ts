import { Router } from "express";
import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from "./user.controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../../types";


export const userRouter=Router();

userRouter.post("/",createUser);
userRouter.get("/",auth(USER_ROLE.admin,USER_ROLE.agent,USER_ROLE.user),getAllUsers);
userRouter.get("/:id",getUserById);
userRouter.put("/:id",updateUserById);
userRouter.delete("/:id",deleteUserById);



