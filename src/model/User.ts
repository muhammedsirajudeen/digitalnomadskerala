import mongoose, { Schema, model, Document } from "mongoose";

export interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    isVerified: boolean;
    avatar: string
    xp: number
}
export interface IUser extends Omit<User, "_id">, Document {

}

const UserSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isVerified: { type: Boolean, default: false },
    avatar: {
        type: String,
        required: true,
    },
    xp: {
        type: Number,
        default: 0,
    }
});

const UserModel = mongoose.models.User || model<IUser>("User", UserSchema);

export default UserModel;