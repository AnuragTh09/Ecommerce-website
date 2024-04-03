import express from 'express';
import newUser from '../controllers/user.controller.js';

const app = express();


// route - /api/v1/user/new 
app.post('/new', newUser );

export default app 