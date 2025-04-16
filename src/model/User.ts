import { Schema, model } from "mongoose";

export interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    isVerified: boolean;
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
});

const UserModel = model<IUser>("User", UserSchema);

export default UserModel;