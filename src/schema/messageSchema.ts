import mongoose, {Types, Schema, Document} from 'mongoose';

export interface messageInterface extends Document{
    roomID: string,
    messages: {userID: Types.ObjectId, message: string, time: Date}[]
};

const messageSchema = new Schema<messageInterface>({
    roomID: {type: String, required: true, unique: true},
    messages: [{
         userID: {type: Schema.Types.ObjectId, ref: 'userSchema'},
         message: String, 
         time: {type:Date, default: Date.now}
         }]
});

export const MessageModel = mongoose.model<messageInterface>('messageSchema', messageSchema);

