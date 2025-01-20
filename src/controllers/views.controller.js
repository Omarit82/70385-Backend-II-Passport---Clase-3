import productModel from "../models/products.model.js"

export const viewHome = async (req, res) =>{
    const products = await productModel.find().lean();
    res.status(200).render('templates/home',{products:products,css:'styles.css'})
}

export const viewNewProduct = async (req,res) => {
    res.status(200).render('templates/loadproduct',{css:'styles.css',js:'newproduct.js'})
}