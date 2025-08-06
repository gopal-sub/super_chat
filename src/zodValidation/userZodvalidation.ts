import {email, z} from 'zod'

export const userCreate_zod_schema = z.object({
    email: z.string().email("Please provide a valid email"),
    username: z.string(),
    password: z.string().min(5),
});
export const userlogin_zod_schema = z.object({
    email: z.string().email("Please provide a valid email"),
    password: z.string().min(5),
});