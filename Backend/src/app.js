import express from 'express';

// importing Routes
import userRoute from './routes/user.routes.js';
 

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.send('API working with /api/v1')
})

// using route
app.use('/api/v1/user' , userRoute )




app.get('/test', (req, res) => {
    res.send("Hello working correct");
})

export default app 