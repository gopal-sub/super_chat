import express from 'express';


export function verifySession(req: express.Request, res: express.Response, next:express.NextFunction){
    console.log(req.session);
    //@ts-ignore
    req.session.userID = "gopapappapapa"
    next();
};