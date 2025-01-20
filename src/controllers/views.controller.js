import productModel from "../models/products.model.js"

export const viewHome = async (req, res) =>{
    const session = req.session;
    if(session){
        console.log("Hay session");
        console.log(session)
    }else{
        console.log("No hay session")
    }
    const products = await productModel.find().lean();
    res.status(200).render('templates/home',{products:products,css:'styles.css'})
}

export const viewNewProduct =  (req,res) => {
    res.status(200).render('templates/loadproduct',{css:'styles.css',js:'newproduct.js'})
}

export const viewLogin =  (req,res) => {
    res.status(200).render('templates/login',{css:'styles.css',js:'login.js'})
}

export const viewRegister =  (req,res) => {
    res.status(200).render('templates/register',{css:'styles.css',js:'register.js'})
}

export const viewProduct = async (req,res) => {
    const id = req.params.id;
    const product = await productModel.findById(id).lean();
    res.status(200).render('templates/product',{product:product,css:'styles.css',js:'register.js'})
}