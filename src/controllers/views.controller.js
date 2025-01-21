import productModel from "../models/products.model.js"

export const viewHome = async (req, res) =>{
    const products = await productModel.find().lean();
    const session = req.session;
    res.status(200).render('templates/home',{session:session,products:products,css:'styles.css'})
}

export const viewNewProduct =  (req,res) => {
    const session = req.session;
    res.status(200).render('templates/loadproduct',{session:session,css:'styles.css',js:'newproduct.js'})
}

export const viewLogin =  (req,res) => {
    const session = req.session;
    res.status(200).render('templates/login',{session:session,css:'styles.css',js:'login.js'})
}

export const viewRegister =  (req,res) => {
    const session = req.session;
    res.status(200).render('templates/register',{session:session,css:'styles.css',js:'register.js'})
}

export const viewProduct = async (req,res) => {
    const session = req.session;
    const id = req.params.id;
    const product = await productModel.findById(id).lean();
    res.status(200).render('templates/product',{session:session,product:product,css:'styles.css',js:'addToCart.js'})
}