import { CustomRequest, withAuthentication } from "@/decorators/decorators";
import { NextResponse } from "next/server";

export const GET = withAuthentication(async (request: CustomRequest) => {
    return NextResponse.json({ message: "success", user: request.user }, { status: 200 })
})