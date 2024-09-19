import { Router } from "express";
import { createUser } from "../controllers/userController.js";

const userRoutes = Router();

userRoutes.post("/", createUser);

export default userRoutes;
