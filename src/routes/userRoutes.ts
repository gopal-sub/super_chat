import {Router} from 'express';

const userRoutes = Router()

userRoutes.get('/signup', createUser);
userRoutes.get('/login', createSession);
