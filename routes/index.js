import { Router } from "express";
import userRoutes from "./userRoute.js";
import loginRoutes from "./loginRoute.js";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/login", loginRoutes);
routes.use("/products", productRoutes);

export default routes;
