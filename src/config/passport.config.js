import passport from "passport";
import local from 'passport-local';
import userModel from "../models/sessions.model.js";
import { encriptar,desencriptar } from "../utils/bcrypt.js";

const localStrategy = local.Strategy;
const initializePassport = () => {
    passport.use('login',new localStrategy({usernameField:'email'},async (username, password,done) =>{
            try {
                const user = await userModel.findOne({email:username});
                if(user && desencriptar(password, user.password)){
                    return done(null, user)
                }
                return done(null, false)
            } catch (error) {
                return done(error,false)
            }
        }
    ))

    
    passport.use('register',new localStrategy(
        {passReqToCallback:true,usernameField:'email'},async (req,username, password, done) =>{
            const {first_name, last_name,email,age} = req.body;
            try {
                const user = await userModel.findOne({email:username})
                if(user){
                    return done(null,false)
                }
                const newUser = {
                    first_name,
                    last_name,
                    email,
                    age,
                    password: encriptar(password)
                }
                const respuesta = await userModel.create(newUser);
                return done(null,respuesta);
            } catch (error) {
                return done(error,false);
            }
        }
    ))



    passport.serializeUser((user,done)=>{
        done(null,user._id)
    })

    passport.deserializeUser(async(id,done)=>{
        const user = await userModel.findById(id);
        done(null, user);
    })
}

export default initializePassport