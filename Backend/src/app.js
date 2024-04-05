import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser'
// importing Routes
import userRoute from './routes/user.routes.js';
import productRoute from './routes/products.routes.js'

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('API working with /api/v1')
})

// using route
app.use('/api/v1/user' , userRoute )
app.use('/api/v1/product', productRoute)

app.use('/uploads', express.static("uploads"))


export default app 