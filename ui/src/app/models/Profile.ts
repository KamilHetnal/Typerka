import { Bet } from "./Bet";
import { ChampionBet } from "./ChampionBet";
import { TopScorerBet } from "./TopScorerBet";
import { User } from "./User";

export interface Profile {
    id: string;
    userName: string;
    displayName: string;
    email: string;
    phoneNumber: string;
    image?: string;
    bio?: string;
    points: number;
    bets: Bet[];
    championBet: ChampionBet;
    topScorerBet: TopScorerBet;
    photos: Photo[];
    roles: string[];
}

export class Profile implements Profile {
    constructor(user: User) {
        this.userName = user.username;
        this.displayName = user.displayName;
        this.image = user.image;
    }
}

export interface Photo {
    id: string;
    url: string;
    isMain: boolean;
}