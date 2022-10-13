import { User } from "./User";

export interface Profile {
    id: string;
    userName: string;
    displayName: string;
    email: string;
    image?: string;
    bio?: string;
    photos: Photo[];
    roles: string[];
}

export class Profile implements Profile {
    constructor(user: User) {
        this.userName = user.userName;
        this.displayName = user.displayName;
        this.image = user.image;
    }
}

export interface Photo {
    id: string;
    url: string;
    isMain: boolean;
}