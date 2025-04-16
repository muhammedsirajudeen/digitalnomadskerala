import { BaseService } from "@/core/abstract/BaseService";
import { IUser } from "@/model/User";
import UserRepository from "@/repository/UserRepository";
import { inject, injectable } from 'tsyringe';
interface IGoogleUserProfile {
    sub: string;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
    email: string;
    email_verified: boolean;
    locale: string;
    id: string;
}


@injectable()
export default class UserService extends BaseService<IUser> {

    constructor(
        @inject('UserRepository') userRepository: UserRepository
    ) {
        super(userRepository);
    }
    async GoogleSignIn(accessToken: string) {
        try {
            const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch Google profile: ${response.statusText}`);
            }

            const profile: IGoogleUserProfile = await response.json();
            console.log(profile)
            const existingUser = await this.findOne({ email: profile.email });
            if (existingUser) {
                return { ...existingUser.toObject(), password: undefined } as IUser
            }
            //else create a new user
            const user = await this.create({
                name: profile.name,
                password: profile.sub,
                avatar: profile.picture,
                email: profile.email,
                isVerified: true
            })
            return { ...user.toObject(), password: undefined } as IUser
        } catch (error) {
            console.error("Error during Google sign-in:", error);
            throw error;
        }
    }

}