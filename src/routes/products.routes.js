import { Router } from "express";
import { addProduct,getProduct,getProducts, updateProduct } from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.post('/',addProduct);
productsRouter.get('/',getProducts);
productsRouter.get('/:id',getProduct);
productsRouter.put('/:id',updateProduct);

export default productsRouter;
