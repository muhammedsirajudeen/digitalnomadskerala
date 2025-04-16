import connectToMongo from "@/utils/connectToMongo";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export function withLoggingAndErrorHandling(handler: (request: NextRequest) => Promise<NextResponse>) {
    return async (request: NextRequest): Promise<NextResponse> => {
        console.log(`[Request] ${request.method} ${request.url}`);
        connectToMongo()
        try {
            const response = await handler(request);
            console.log(`[Response] Status: ${response.status}`);
            return response;
        } catch (error) {
            console.error("[Error in Route Handler]", error);
            return NextResponse.json(
                { message: "An unexpected error occurred", error: error instanceof Error ? error.message : error },
                { status: 500 }
            );
        }
        finally {
            await mongoose.connection.close();
            console.log(`[End] ${request.method} ${request.url}`);
        }
    };
}