import { Router } from "express";
import userRoutes from "./userRoute.js";
import loginRoutes from "./loginRoute.js";
import productRoutes from "./productRoute.js";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/login", loginRoutes);
routes.use("/products", productRoutes);

export default routes;
