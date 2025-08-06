import { userCreate_zod_schema, userlogin_zod_schema } from "../zodValidation/userZodvalidation";
import express from 'express';
import {email, z} from 'zod';

export async function validate_createUser_input(req: express.Request, res:  express.Response, next:  express.NextFunction) {
    const result = userCreate_zod_schema.safeParse({
        email: req.body.email,
        password: req.body.password,
        username: req.body.username
    });

    if(!result.success){
        res.status(400).json({
            msg: "invalid input",
            errors: result.error.flatten().fieldErrors
        });
        return;
    }
    next();

};

export async function validate_createSession_input(req: express.Request, res:  express.Response, next:  express.NextFunction) {
    const result = userlogin_zod_schema.safeParse({
        email: req.body.email,
        password: req.body.password
    });

    if(!result.success){
        res.status(400).json({
            msg: "invalid input",
            errors: result.error.flatten().fieldErrors
        });
        return;
    }
    next();

}


