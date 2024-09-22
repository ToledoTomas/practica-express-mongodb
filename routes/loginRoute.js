import { Router } from "express";
import { loginUser } from "../controllers/loginController.js";

const loginRoutes = Router();

loginRoutes.post("/", loginUser);

export default loginRoutes;
