import { withLoggingAndErrorHandling } from "@/decorators/decorators";
import { NextRequest, NextResponse } from "next/server";

export const POST = withLoggingAndErrorHandling(async (request: NextRequest) => {
    const { access_token } = await request.json();
    console.log(access_token)
    return NextResponse.json({ message: "success" }, { status: 200 })
})