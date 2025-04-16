import { BaseService } from "@/core/abstract/BaseService";
import { IUser } from "@/model/User";
import UserRepository from "@/repository/UserRepository";
import { inject, injectable } from 'tsyringe';


@injectable()
export default class UserService extends BaseService<IUser> {
    constructor(
        @inject('UserRepository') userRepository: UserRepository
    ) {
        super(userRepository);
    }
}