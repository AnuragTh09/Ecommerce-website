import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser'
import  NodeCache from 'node-cache'
import morgan from 'morgan'
import stripeKey from './config/index.config.js'
import Stripe from 'stripe'
// importing Routes
import userRoute from './routes/user.routes.js';
import productRoute from './routes/products.routes.js'
import orderRoute from './routes/order.routes.js'
import paymentRoute from './routes/payment.routes.js'


export const myCache = new NodeCache();
export const stripe = new Stripe(stripeKey)
const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan("dev")); // what req we made will be shown in the terminal with the use of morgan

app.get('/', (req, res) => {
    res.send('API working with /api/v1')
})

// using route
app.use('/api/v1/user' , userRoute )
app.use('/api/v1/product', productRoute)
app.use('/api/v1/order', orderRoute)
app.use('/api/v1/payment', paymentRoute)

app.use('/uploads', express.static("uploads"))


export default app 