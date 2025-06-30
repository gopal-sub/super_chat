import bcrypt from 'bcrypt';


export function encryptPassword(password: string){
    const hashed_password = bcrypt.hash(password, 10);
    return hashed_password;
}

export async function verifyPassword(hashedPassword: string, userPassword: string): Promise <boolean>{
    try{
        const valid_password = await bcrypt.compare(userPassword, hashedPassword);
        return valid_password;
    }catch(e){
        return false;
    }
}








//have a create session
//have encrypt and verify password
