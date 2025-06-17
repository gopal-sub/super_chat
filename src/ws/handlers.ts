import { WebSocket } from "ws";
import {ClientMessage} from './types';
import {addToRoom} from './manager'

export function handleSocket(socketObject: WebSocket){
    let currentRoom: string | null = null;

    socketObject.on("message", (data)=>{
        try{
            const message: ClientMessage = JSON.parse(data.toString());
            if(message.type === "join"){
                
            }else if(message.type === 'chat'){

            }
        }catch(e){
            // error

        }

        MessageChannel
        
    })
}