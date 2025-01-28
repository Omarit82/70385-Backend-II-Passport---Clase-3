import { Router} from "express";
import { getCart,deleteCart, updateProductCart, updateQtyProductCart,deleteProductCart,insertProductCart,createCart } from "../controllers/carts.controller";

const cartRouter = Router();

cartRouter.get('/:id',getCart);
cartRouter.post('/',createCart);
cartRouter.post('/:cid/products/:pid',insertProductCart);
cartRouter.put('/:cid',updateProductCart);
cartRouter.put('/:cid/products/:pid',updateQtyProductCart);
cartRouter.delete('/:cid',deleteCart);
cartRouter.delete('/:cid/products/:pid',deleteProductCart);

export default cartRouter;