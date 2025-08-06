import {Router} from 'express';
import { createUser, createSession } from '../controller/userController';
import { verifySession } from '../middleware/authMiddleware';
import { validate_createUser_input, validate_createSession_input  } from '../middleware/inputValidationUser';


export const userRouter = Router()

userRouter.post('/signup', validate_createUser_input, createUser);
userRouter.post('/login', validate_createSession_input, createSession);
