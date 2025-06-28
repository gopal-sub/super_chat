// import { WebSocket } from "ws";
// import { ServerMessage } from "./types";


// const rooms = new Map<string, Set<[WebSocket, string]>>();
// //keeps rooms in reddis


// export function subscribeToRoom(roomId: string, socket: WebSocket){
//     if(!rooms.has(roomId)){
//         //create a room
//         rooms.set(roomId, new Set());
//     }
//     rooms.get(roomId)?.add(socket);
// };

// //change this function 
// export function unSubscribeToRoom(roomId: string, socket: WebSocket){
//     if(!rooms.has(roomId)){
//         //create a room
//         rooms.set(roomId, new Set());
//     }
//     rooms.get(roomId)?.add(socket);
// };


// export function broadcastMessage(roomId: string, data: ServerMessage ){
//     if(!rooms.has(roomId)){
//         return;
//     }
//     const clients = rooms.get(roomId);
//     if(!clients){
//         return;
//     }
//     const message = JSON.stringify(data)
//     for(const client of clients){
//         if(client.readyState === WebSocket.OPEN){
//             client.send(message);
//         }
        
//     }
// }