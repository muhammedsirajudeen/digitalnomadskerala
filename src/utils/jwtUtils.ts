import jwt, { SignOptions, JwtPayload } from 'jsonwebtoken';
import { envConfig } from './envConfig';
export class JWTHelper {
    private static secret: string;
    private static options: SignOptions;

    static initialize(secret?: string, options: SignOptions = {}) {
        this.secret = secret || envConfig.JWT_EXPIRES_IN;
        this.options = {
            expiresIn: '1d', // default expiry
            ...options,
        };
    }

    // Sign payload into a token
    static sign(payload: string | object | Buffer, customOptions: SignOptions = {}): string {
        this.initialize();
        if (!this.secret) {
            throw new Error('JWTHelper is not initialized. Call initialize() first.');
        }
        return jwt.sign(payload, this.secret, {
            ...this.options,
            ...customOptions,
        });
    }

    // Verify token and return decoded payload
    static verify(token: string): JwtPayload | string | null {
        this.initialize()
        if (!this.secret) {
            throw new Error('JWTHelper is not initialized. Call initialize() first.');
        }
        try {
            return jwt.verify(token, this.secret);
        } catch (err) {
            const error = err as jwt.JsonWebTokenError;
            if (error.name === 'TokenExpiredError') {
                console.error('Token expired:', error.message);
            } else if (error.name === 'JsonWebTokenError') {
                console.error('Invalid token:', error.message);
            } else {
                console.error('Token verification error:', error.message);
            }
            return null;
        }
    }

    // Decode token without verifying (for reading payload only)
    static decode(token: string): unknown {
        return jwt.decode(token);
    }
}
