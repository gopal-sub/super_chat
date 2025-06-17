export type ClientMessage = 
    {type: "join", roomId: string} 
    | 
    {type: "chat", message: string};

export type ServerMessage = 
    {type: "message", message: string}
    |
    {type: "error", error: string};