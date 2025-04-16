import { BaseRepository } from "@/core/abstract/BaseRepository";
import { IUser } from "@/model/User";
import { Model } from "mongoose";
import { injectable, inject } from 'tsyringe';


@injectable()
export default class UserRepository extends BaseRepository<IUser> {
    private userModel: Model<IUser>
    constructor(
        @inject('UserModel') userModel: Model<IUser>
    ) {
        super(userModel);
        this.userModel = userModel;
    }
}