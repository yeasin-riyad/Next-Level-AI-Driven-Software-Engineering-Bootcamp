import { Router } from "express";
import { profileController } from "./profile.controller";

export const profileRoute = Router();

profileRoute.post("/", profileController.createProfile);

