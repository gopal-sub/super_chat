export type ClientMessage = 
    {type: "SUBSCRIBE", roomId: string} 
    | 
    {type: "chat", message: string, roomId: string}
    |
    {type: "UNSUBSCRIBE", roomId: string};

export type ServerMessage = 
    {type: "message", message: string}
    |
    {type: "error", error: string};