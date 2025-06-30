import dotenv from 'dotenv';
dotenv.config();

import { WebSocketServer } from "ws";
// import { handleSocket } from "./ws/handlers";
import express from 'express';
import session from 'express-session'
import MongoStore from 'connect-mongo';

import mongoose from 'mongoose';
import {userRouter} from './routes/userRoutes'

const mongoURL = process.env.DATABASE_URL;
if(!mongoURL){
    throw new Error("Mondodb URL missing");
}


const app = express();

app.use(session({
    secret: "dbakjbd",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_STORE_URL
    }),
}));

app.use(express.json());
app.use('/api/v1/user',userRouter);


app.listen(process.env.PORT, async()=>{
    await mongoose.connect(mongoURL);
    console.log("database connected");
    console.log("server running")
})




// const wss = new WebSocketServer({ port: PORT});

// wss.on('connection', (socketObj)=>{
//     console.log("A new user joined");
//     handleSocket(socketObj);
// });