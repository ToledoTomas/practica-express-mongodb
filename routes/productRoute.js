import { Router } from "express";
import {
  findProduct,
  findProducts,
  createProduct,
} from "../controllers/productController";

const productRoutes = Router();

productRoutes.get("/:id", findProduct);
productRoutes.get("/", findProducts);
productRoutes.post("/", createProduct);

export default productRoutes;
