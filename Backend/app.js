import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import UserRouter from './routers/user.route.js'
import cors from 'cors';
import feedbackRoutes from './routers/feedback.route.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use("/user",UserRouter);
app.use('/Feedback', feedbackRoutes);


mongoose.connect("mongodb://localhost:27017/feedbackSystem").then(()=>{
    console.log("Connected to MongoDB");
    app.listen(2024,()=>{
        console.log("Server started...")
    })
}).catch(err=>{
    console.log(err);
});