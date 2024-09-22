import { Router } from "express";
import {
  findProduct,
  findProducts,
  createProduct,
  updateProduct,
  removeProduct,
} from "../controllers/productController.js";

const productRoutes = Router();

productRoutes.get("/:id", findProduct);
productRoutes.get("/", findProducts);
productRoutes.post("/", createProduct);
productRoutes.patch("/:id", updateProduct);
productRoutes.delete("/:id", removeProduct);

export default productRoutes;
