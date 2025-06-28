import mongoose, {Types, Document, Schema} from "mongoose";

export interface userInterface extends Document{
    username: string,
    email: string,
    password: string,
    
};

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

export const UserModel = mongoose.model<userInterface>('userSchema', userSchema);