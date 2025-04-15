import connectToMongo from "@/utils/connectToMongo"
import mongoose from "mongoose"

export function withLoggingAndDB<T>(handler: () => T): () => T {
    return () => {
        try {
            connectToMongo()
            const res = handler()
            return res
        } catch (error) {
            console.log('[Error from Action]', error)
            mongoose.connection.close()
            throw error // Re-throw the error to ensure proper error handling
        }
    }
}