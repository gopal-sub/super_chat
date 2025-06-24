export type ClientMessage = 
    {type: "join", roomId: string} 
    | 
    {type: "chat", message: string, roomId: string};

export type ServerMessage = 
    {type: "message", message: string}
    |
    {type: "error", error: string};