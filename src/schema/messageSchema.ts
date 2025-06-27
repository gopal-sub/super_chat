import {Types, Schema, Document} from 'mongoose';

export interface userInterface extends Document{
    roomID: string,
    messages: {
        string: {message: string, userID:Types.ObjectId }
    }
}

const userSchema: userInterface = new Schema({
    roomID: {type: String, require: true, unique: true},
    messages: {
        {}
    }
})




