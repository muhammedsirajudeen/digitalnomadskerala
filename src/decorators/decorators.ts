import { User } from "@/model/User";
import connectToMongo from "@/utils/connectToMongo";
import { JWTHelper } from "@/utils/jwtUtils";
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

export interface CustomRequest extends NextRequest {
    user: User
}

export function withAuthentication(handler: (request: CustomRequest) => Promise<NextResponse>) {
    return async (request: CustomRequest): Promise<NextResponse> => {
        console.log(`[Request] ${request.method} ${request.url}`);
        connectToMongo()
        const token = request.cookies.get("access_token")?.value;
        if (!token) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        try {
            const user = JWTHelper.decode(token)
            console.log(user)
            if (!user) {
                return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
            }

            request.user = user as User;
            return await handler(request);
        } catch (error) {
            console.error("[Error in Authentication]", error);
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        finally {
            await mongoose.connection.close();
            console.log(`[End] ${request.method} ${request.url}`);
        }
    };
}