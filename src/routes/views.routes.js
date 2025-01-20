import { Router } from "express";
import { viewHome,viewNewProduct } from "../controllers/views.controller.js";
const viewsRouter = Router();

viewsRouter.get('/',viewHome);
viewsRouter.get('/new-product',viewNewProduct)

export default viewsRouter;