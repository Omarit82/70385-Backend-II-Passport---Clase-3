import productModel from "../models/products.model.js";

export const getProducts = async (req,res) => {
    try {
        const {limit, page, metFilter, filter, method,metOrder, order} = req.query;
        const pag = page !== undefined ? page:1;
        const lim = limit !== undefined ? limit:10;
        const met = metFilter !== undefined ? {[method]:filter} : {};
        const ord = metOrder !== undefined ? {metOrder:order} : {};
        const products = await productModel.paginate(met, {limit:lim,page:pag,ord});
        res.status(200).send({products:products})
    } catch (error) {
        res.status(400).send({message:"bad request",error:error})
    }
}

export const getProduct = async (req,res) =>{
    try {
        const id = req.params.id;
        const product = await productModel.findById(id);
        if(product != null){
            res.status(200).send({message:"Product found:",product:product})
        }else{
            res.status(404).send({message:"Product not found"})
        }
    } catch (error) {
        res.status(400).send({message:"bad request",error:error})
    }
}

export const updateProduct = async (req,res) => {
    try {
        const id = req.params.id;
        const prod = req.body
        const product = await productModel.findByIdAndUpdate(id,prod);
        if(product != null){
            res.status(200).send({message:"Product updated:",product:prod})
        }else{
            res.status(404).send({message:"Product not found"})
        }
    } catch (error) {
        res.status(400).send({message:"bad request",error:error})
    }
}

export const addProduct = async (req,res) => {
    try {
        const {title, autor,year,genere,price,stock,code,thumbnail} = req.body
        //chequeo si ya existe un producto con ese codigo
        const prod = await productModel.findOne({code:code});
        if(!prod){
            const newProduct = await productModel.create({
                title:title,
                autor:autor,
                year:year,
                genere:genere,
                price:price,
                stock:stock,
                code:code,
                thumbnail:thumbnail
            })
            res.status(201).send({message:"Product created Ok",product:newProduct})
        }else{
            //El codigo 409 indica un conflicto en el servidor.En este caso dos productos con el mismo codigo unico
            res.status(409).send({message:"Conflict! - This product already exists"})
        }
    } catch (error) {
        res.status(400).send({message:"bad request",error:error})
    }
}