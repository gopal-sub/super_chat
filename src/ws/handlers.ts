import { WebSocket } from "ws";
import {ClientMessage, ServerMessage} from './types';
import {subscribeToRoom, broadcastMessage} from './manager';

//roomID -> [socket1, userID],
// => send message to all members of the room

export function handleSocket(socketObject: WebSocket){
    // let currentRoom: string | null = null;
    //check if the user is authenticated then add the user to the room.

    socketObject.on("message", (data)=>{
        try{
            const message: ClientMessage = JSON.parse(data.toString());
            if(message.type === "SUBSCRIBE"){
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

