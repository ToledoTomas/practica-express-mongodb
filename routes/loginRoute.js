import { Router } from "express";

const loginRoutes = Router();

loginRoutes.get("/", (req, res) => {
  res.send("Bienvenido");
});

export default loginRoutes;
