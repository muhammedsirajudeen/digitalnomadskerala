import UserModel from "@/model/User";
import UserRepository from "@/repository/UserRepository";
import UserService from "@/service/UserService";
import { Model } from "mongoose";
import { container as depContainer } from "tsyringe";

const container = depContainer

class ModelInjector<T> {
    private model: Model<T>;

    constructor(model: Model<T>) {
        this.model = model;
    }

    getModel() {
        return this.model;
    }
}

container.registerInstance('UserModel', new ModelInjector(UserModel))
container.registerSingleton('UserRepository', UserRepository)
container.registerSingleton('UserService', UserService)

export default container