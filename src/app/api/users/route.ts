import container from "@/core/config/config"
import { withAuthentication } from "@/decorators/decorators"
import UserService from "@/service/UserService"
import { NextRequest, NextResponse } from "next/server"

export const GET = withAuthentication(async (request: NextRequest) => {
    const userService: UserService = container.resolve('UserService')
    const page = request.nextUrl.searchParams.get('page') || '1'
    const limit = request.nextUrl.searchParams.get('limit') || '10'
    const users = await userService.findAll({}, parseInt(page), parseInt(limit), [], '-password')
    console.log(users)
    return NextResponse.json({ message: "success", users: users.data }, { status: 200 })
})