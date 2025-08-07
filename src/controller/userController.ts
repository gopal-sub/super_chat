import express from 'express';
import {insertUserDB, findUserByEmail, findUserByUsername} from '../services/userServices';
import { userInterface } from '../schema/userSchema';
import {encryptPassword, verifyPassword} from '../services/authService'


export async function createUser(req: express.Request, res: express.Response, next: express.NextFunction){
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    

    //find if user email already exists
    const db_responseEmail = await findUserByEmail(email);
    if(db_responseEmail){
        res.status(401).json({
            msg: `The email: ${db_responseEmail!.email} already exists`
        });
        return;
    };
    
    //find if username is taken
    
    const db_responseUsername = await findUserByUsername(username);
    if(db_responseUsername){
        res.status(401).json({
            msg: `The username: ${db_responseUsername!.username} already exists`
        });
        return;
    };
    

    const newUser: Partial<userInterface> = {
        username: username,
        email: email,
        password: await encryptPassword(password),
    };
    try{
        const db_responseEmail = await insertUserDB(newUser);
        res.status(200).json({
            msg: `New user created with username: ${db_responseEmail?.username}`
        })
    }catch(e){
        res.status(500).json({
            msg: "There was a error create a new user"
        })
    }
    

}

export async function createSession(req: express.Request, res: express.Response){
    const email = req.body.email;
    const password = req.body.password;
    try{
        const user  = await findUserByEmail(email);
        if(!user){
            res.status(404).json({
                msg: "There is no user assciated with this email"
            });
            return;
        };
        const valid_password = await verifyPassword(user.password, password);
        if(!valid_password){
            res.status(410).json({
                msg: "incorrect password"
            });
            return;
        }
        // create_session
        
        req.session.userID = user._id as string;
        res.status(200).json({
            msg:"You are logged in"
        });
        return;



        
    }catch(e){
        res.status(500).json({
            msg: "Internal server error"
        })
    }
}
export async function viewChats(req: express.Request, res: express.Response) {
    console.log(req.session);
    res.json({
        msg: "hi"
    })
}

export async function retriveSession(req: express.Request, res: express.Response) {
    
}