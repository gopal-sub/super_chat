import express from 'express';
import {insertUserDB, findUserByEmail, findUserByUsername} from '../services/userServices';
import { userInterface } from '../schema/userSchema';

export async function createUser(req: express.Request, res: express.Response){
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    console.log(username);
    

    //find if user email already exists
    const db_response = await findUserByEmail(email);
    if(db_response){
        res.status(407).json({
            msg: `The email: ${db_response!.email} already exists`
        });
        return;
    };
    
    //find if username is taken
    
    const db_response2 = await findUserByUsername(username);
    if(db_response2){
        res.status(401).json({
            msg: `The username: ${db_response2!.username} already exists`
        });
        return;
    };
    

    const newUser: Partial<userInterface> = {
        username: username,
        email: email,
        password: password
    };
    try{
        const db_response = await insertUserDB(newUser);
        res.status(200).json({
            msg: `New user created with username: ${db_response?.username}`
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
        }
        if(user.password != password){
            res.status(200).json({
                msg: "incorrect password"
            });
            return;
        }
        // create_session
    }catch(e){
        res.status(500).json({
            msg: "Internal server error"
        })
    }
}