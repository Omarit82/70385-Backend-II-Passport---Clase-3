import { cartModel } from '../models/carts.model.js';

export const insertProductCart = async(req, res) => {
    try {
        const cartId = req.params.cid;
        const prodId = req.params.pid;
        const {quantity} = req.body;
        const cart = await cartModel.findById(cartId)
        const indice = cart.products.findIndex(prod => prod.id_prod == prodId)
        if(indice != -1){
            cart.products[indice].quantity += quantity
        } else {
            cart.products.push({id_prod: prodId, quantity:quantity})
        }
        const respuesta = await cartModel.findByIdAndUpdate(cartId, cart);
        res.status(200).send({message:"Producto agregado correctamente",respuesta:respuesta})
    } catch (error) {
        res.status(404).send({error:error})
    }
}

export const createCart = async (req, res) => {
    try {
        const cart = cartModel.create()
        res.status(201).send({message:"Cart created ok!",cart:cart})
    } catch (error) {
        res.status(500).send({message: "db error",error:error})
    }
}

export const getCart = async (req,res) => {
    try {
        const cid = req.params.id;
        const cart = cartModel.findById(cid);
        res.status(200).send({cart:cart})
    } catch (error) {
        res.status(500).send({message:"Error al comunicar con la DB",error:error});
    }
}

export const deleteProductCart = (req,res) => {

}

export const deleteCart = (req,res) => {

}

export const updateProductCart = (req,res) => {

}

export const updateQtyProductCart = (req,res) =>{
    
}