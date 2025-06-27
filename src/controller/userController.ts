import express from 'express';
import {insertUserDB} from '../services/userServices'

export function createUser(req: express.Request, res: express.Response){
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = {
        username: username,
        email: email,
        password: password
    }

    insertUserDB(newUser);

}