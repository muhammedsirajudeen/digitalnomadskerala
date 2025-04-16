import 'reflect-metadata'
import { withLoggingAndErrorHandling } from "@/decorators/decorators";
import { NextRequest, NextResponse } from "next/server";
import container from "@/core/config/config";
import UserService from "@/service/UserService";
export const POST = withLoggingAndErrorHandling(async (request: NextRequest) => {
    const { access_token } = await request.json();
    const userService: UserService = container.resolve('UserService')
    console.log(userService)
    return NextResponse.json({ message: "success" }, { status: 200 })
})