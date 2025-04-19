import 'reflect-metadata'
import container from "@/core/config/config"
import { CustomRequest, withAuthentication } from "@/decorators/decorators"
import UserService from "@/service/UserService"
import { NextResponse } from "next/server"

export const GET = withAuthentication(async (request: CustomRequest) => {
    const userService: UserService = container.resolve('UserService')
    const page = request.nextUrl.searchParams.get('page') || '1'
    const limit = request.nextUrl.searchParams.get('limit') || '10'
    const users = await userService.findAll({ _id: { $ne: request.user._id } }, parseInt(page), parseInt(limit), [], '-password')
    const sortedUsers = users.data.sort((a, b) => b.xp - a.xp)
    return NextResponse.json({ message: "success", users: sortedUsers }, { status: 200 })
})