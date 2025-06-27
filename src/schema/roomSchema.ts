import mongoose, {Document, Schema, Types} from 'mongoose';

export interface roomInterface extends Document{
    roomID: string,
    members: Types.ObjectId[],
    admins: Types.ObjectId[],
    blocked: Types.ObjectId[],

};

const roomSchema = new Schema<roomInterface>({
    roomID: String,
    members: [{type: Schema.Types.ObjectId, ref: 'userSchema'}],
    admins: [{type: Schema.Types.ObjectId, ref: 'userSchema'}],
    blocked: [{type: Schema.Types.ObjectId,  ref: 'userSchema'}],
});

export const UserModel = mongoose.model<roomInterface>('roomSchema', roomSchema);