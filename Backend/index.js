// backend/index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db/index.js';
import path from 'path';
import { fileURLToPath } from 'url';

//loads .env
dotenv.config();

const app=express();

app.use(express.json());
//Allow requests from front-end dev server:
app.use(cors({origin: process.env.CLIENT_URI || '*'}))

connectDB();

//simple API route
app.get('/api/ping',(req,res)=>{
    res.json({ok:true,message: 'pong from backend'});

});
const PORT =process.env.PORT || 8000;
app.listen(PORT,()=>console.log(`Backend running on port ${PORT}`));