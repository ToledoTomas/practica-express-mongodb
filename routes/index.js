import { Router } from "express";
import userRoutes from "./userRoute.js";

const routes = Router();

routes.use("/users", userRoutes);

export default routes;
