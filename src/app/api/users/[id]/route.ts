import 'reflect-metadata';
import container from "@/core/config/config";
import { withAuthenticationById } from "@/decorators/decorators";
import { RouteError } from "@/lib/utils";
import UserService from "@/service/UserService";
import { NextRequest, NextResponse } from "next/server";

export const GET = withAuthenticationById(
    async (request: NextRequest, { params }: { params: { id: string } }) => {
        const postId = params.id;
        const userService: UserService = container.resolve("UserService");
        const user = await userService.findById(postId);
        if (!user) {
            throw new RouteError(`User with id ${postId} not found`, 404);
        }
        return NextResponse.json({ message: 'success', user: { ...user.toObject(), password: undefined } }, { status: 200 });
    }
);
