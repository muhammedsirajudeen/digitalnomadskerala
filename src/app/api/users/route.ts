import container from "@/core/config/config"
import { withAuthentication } from "@/decorators/decorators"
import UserService from "@/service/UserService"
import { NextResponse } from "next/server"

export const GET = withAuthentication(async () => {
    const userService: UserService = container.resolve('UserService')
    const users = await userService.findAll()
    console.log(users)
    return NextResponse.json({ message: "success", users: users }, { status: 200 })
})