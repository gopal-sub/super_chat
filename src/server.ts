import { WebSocketServer } from "ws";
import { handleSocket } from "./ws/handlers";

const PORT = 3000;

const wss = new WebSocketServer({ port: PORT});

wss.on('connection', (socketObj)=>{
    console.log("A new user joined");
    handleSocket(socketObj);
});