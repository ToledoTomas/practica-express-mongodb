import { Router } from "express";
import {
  createUser,
  findUsers,
  findUser,
  updateUser,
  removeUser,
} from "../controllers/userController.js";

const userRoutes = Router();

userRoutes.post("/", createUser);
userRoutes.get("/", findUsers);
userRoutes.get("/:id", findUser);
userRoutes.patch("/:id", updateUser);
userRoutes.delete("/:id", removeUser);

export default userRoutes;
