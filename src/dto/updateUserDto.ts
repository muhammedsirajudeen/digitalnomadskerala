export class UpdateUserDto {
    name: string;
    bio: string;
    location: string;
    languages: string[];
    interests: string[];
    constructor(
        name: string,
        bio: string,
        location: string,
        languages: string[],
        interests: string[]
    ) {
        this.name = name;
        this.bio = bio;
        this.location = location;
        this.languages = languages || [];
        this.interests = interests || [];
    }
}