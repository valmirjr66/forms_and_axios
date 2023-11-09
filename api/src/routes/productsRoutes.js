import express from "express";
import ProductsController from "../controllers/productsController.js";

const router = express.Router();

router
  .get("/products", ProductsController.getAll)
  .get("/products/:id", ProductsController.getById)
  .post("/products", ProductsController.create)
  .put("/products/:id", ProductsController.update)
  .delete("/products/:id", ProductsController.delete);

export default router;
