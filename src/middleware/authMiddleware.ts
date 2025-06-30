import express from 'express';


export function verifySession(req: express.Request, res: express.Response, next:express.NextFunction){
    
    //@ts-ignore
    if(!req.session.username){
        return null;
    }
    next();
};

