import { WebSocket } from "ws";
import {ClientMessage, ServerMessage} from './types';
import {addToRoom, broadcastMessage} from './manager'

export function handleSocket(socketObject: WebSocket){
    // let currentRoom: string | null = null;

    socketObject.on("message", (data)=>{
        try{
            console.log(data.toString())
            const message: ClientMessage = JSON.parse(data.toString());
            if(message.type === "join"){
                const room = message.roomId;
                addToRoom(room, socketObject);
                const sendMsg = `type: "message", message: Joined room ${room}`;

                socketObject.send(sendMsg);
            }else if(message.type === 'chat'){
                const roomId = message.roomId;
                const clientMsg = message.message;
                const sendMsg: ServerMessage = {type: "message", message: clientMsg}
                broadcastMessage(roomId, sendMsg);
            }
        }catch(e){
            // error
            console.log(e);

        }

        MessageChannel
        
    })
}