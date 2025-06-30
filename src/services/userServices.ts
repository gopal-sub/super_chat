import { userInterface, UserModel } from "../schema/userSchema";

export async function insertUserDB(newUser: Partial<userInterface>){
    try{
        const db_response = await UserModel.create(newUser);
        return db_response;
    }catch(e){
        return null;
    }
    
};

export async function findUserByEmail(email: string){
    try{
        const db_response = await UserModel.findOne({
            email: email
        });
        return db_response;
    }catch(e){
        return null;
    }
};
export async function findUserByUsername(username: string){
    try{
        const db_response = await UserModel.findOne({
            username: username
        });
        return db_response;
    }catch(e){
        return null;
    }
};

