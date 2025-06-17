import { WebSocketServer } from "ws";
import http from 'http';
import { handleSocket } from "./ws/handlers";

const http_server = http.createServer();

const wss = new WebSocketServer({ server: http_server});

wss.on('connection', (socketObj)=>{
    console.log("A new user joined");
    handleSocket(socketObj);
});


http_server.listen(3000, ()=>{
    console.log("server running on port 3000")
})