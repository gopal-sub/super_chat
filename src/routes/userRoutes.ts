import {Router} from 'express';
import { createUser, createSession } from '../controller/userController';
import { verifySession } from '../middleware/authMiddleware';

export const userRouter = Router()

userRouter.post('/signup', createUser);
userRouter.post('/login', createSession);
