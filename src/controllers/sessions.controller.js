
export const login = async(req,res)=>{
    try {
        const user = req.user;
        if(!req.user){
            return res.status(401).send({message:"Usuario o contraseña incorrectos"})
        }
        req.session.log = true;
        req.session.email = user.email
        req.session.first_name = user.first_name
        req.session.last_name = user.last_name
        if (user.rol == "Admin"){
            req.session.rol = true
        }
        console.log(req.session)
        return res.status(200).send({message:"login exitoso"})
    } catch (error) {
        res.status(500).send({message:"Error en la comunicacion con la db", error:error})
    }
}

export const logout = async(req,res)=>{
    try {
        if(req.session.log){
            req.session.destroy();
            res.status(200).redirect('/')
        }
    } catch (error) {
        res.status(500).send({message:"Error en la comunicacion con la db", error:error})
    }
}
export const register = async(req, res) => {
    try {
        if(!req.user){
            return res.status(400).send({message:"El mail ya se encuentra registrado"})
        }
        return res.status(201).send({message:"User created ok"})
    } catch (error) {
        res.status(500).send({message:"Error en comunicacion con db",error:error})
    }
}