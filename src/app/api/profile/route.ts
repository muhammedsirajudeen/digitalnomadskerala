import 'reflect-metadata';
import container from "@/core/config/config";
import { CustomRequest, withAuthentication } from "@/decorators/decorators";
import { RouteError } from "@/lib/utils";
import UserService from "@/service/UserService";
import { NextResponse } from "next/server";
import { IUser } from '@/model/User';

export const GET = withAuthentication(
    async (request: CustomRequest) => {
        const userService: UserService = container.resolve("UserService");
        const user = await userService.findById(request.user._id);
        if (!user) {
            throw new RouteError(`User with id ${request.user._id} not found`, 404);
        }
        return NextResponse.json({ message: 'success', user: { ...user.toObject(), password: undefined } }, { status: 200 });
    }
);


export const PATCH = withAuthentication(async (request: CustomRequest) => {
    const userService: UserService = container.resolve("UserService");
    const updateUser: IUser = await request.json()
    //create a dto
    const updatedUser = userService.updateById(request.user._id, updateUser)

    return NextResponse.json({ message: "success", user: { ...updatedUser, password: undefined } }, { status: 200 })
})