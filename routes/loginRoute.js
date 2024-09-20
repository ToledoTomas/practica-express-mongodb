import { Router } from "express";
import { loginUser } from "../controllers/loginController";

const loginRoutes = Router();

loginRoutes.post("/", loginUser);

export default loginRoutes;
