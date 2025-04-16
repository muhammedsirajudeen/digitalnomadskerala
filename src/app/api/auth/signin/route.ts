import 'reflect-metadata'
import { withLoggingAndErrorHandling } from "@/decorators/decorators";
import { NextRequest, NextResponse } from "next/server";
import container from "@/core/config/config";
import UserService from "@/service/UserService";
import { JWTHelper } from '@/utils/jwtUtils';
export const POST = withLoggingAndErrorHandling(async (request: NextRequest) => {
    const { access_token } = await request.json();
    console.log(access_token)
    const userService: UserService = container.resolve('UserService')
    const user = await userService.GoogleSignIn(access_token)
    const token = JWTHelper.sign(user)
    console.log(token)
    const response = NextResponse.json({ message: "success", user: user }, { status: 200 })
    response.cookies.set('access_token', token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7, // 1 week
        sameSite: 'strict'
    })
    return response
})