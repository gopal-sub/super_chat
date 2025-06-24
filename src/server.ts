import { WebSocketServer } from "ws";
import http from 'http';
import { handleSocket } from "./ws/handlers";

const PORT = 3000;

const http_server = http.createServer();

const wss = new WebSocketServer({ server: http_server});

wss.on('connection', (socketObj)=>{
    console.log("A new user joined");
    handleSocket(socketObj);
});


http_server.listen(PORT, ()=>{
    console.log(`server running ${PORT}`);
})