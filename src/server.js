import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import MongoStore from 'connect-mongo';
import session from 'express-session';
import { engine } from 'express-handlebars';
import userRouter from './routes/users.routes.js';
import viewsRouter from './routes/views.routes.js'
import productsRouter from './routes/products.routes.js';
import initializePassport from './config/passport.config.js';
import __dirname from './path.js';




const app = express();
const PORT = 8080;

app.engine('handlebars',engine());
app.set('views', __dirname+'/views');
app.set('view engine', 'handlebars');
app.use('/public', express.static(__dirname+'/public'))

app.use(express.json())
/**USO DE SESSION**/
app.use(session({
    store: MongoStore.create({
        mongoUrl:"mongodb+srv://roselliomar82:Boeing747-8i@clusteromarit.z0kfa.mongodb.net/?retryWrites=true&w=majority&appName=ClusterOmarit",
        ttl:30
    }),
    secret:"codigo",
    resave:true,
    saveUninitialized:true
}))

initializePassport();
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/users',userRouter);
app.use('/api/products',productsRouter);
app.use('/',viewsRouter);

app.listen(PORT, ()=>{
    console.log("Server running ar port: ",PORT)
})

mongoose.connect("mongodb+srv://roselliomar82:Boeing747-8i@clusteromarit.z0kfa.mongodb.net/?retryWrites=true&w=majority&appName=ClusterOmarit")
.then(
    console.log("DB connected")
)