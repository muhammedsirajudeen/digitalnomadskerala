import { withLoggingAndErrorHandling } from "@/decorators/decorators";
import { NextResponse } from "next/server";

export const GET = withLoggingAndErrorHandling(async () => {
    const response = NextResponse.json({ message: "Signout Success" })
    response.cookies.delete("access_token")
    return response
})