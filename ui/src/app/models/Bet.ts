import { MatchDto } from "./Match"
import { Team, TeamDto } from "./Team"

export interface Bet {
    id: string
    homeScore: number
    awayScore: number
    match: MatchDto
    appUserId: string
    betPoints: number
    winner: TeamDto
  }

  export class Bet implements Bet {
    constructor(init?: BetFormValues) {
        Object.assign(this, init);
    }
}

export class BetFormValues {
    id?: string = undefined;
    homeScore: number = 0;
    awayScore: number = 0;
    match: MatchDto | null = null;
    appUserId?: string = undefined;
    winner?: TeamDto | null = null;

    constructor(bet?: BetFormValues) {
        if(bet) {
            this.id = bet.id;
            this.homeScore = bet.homeScore;
            this.awayScore = bet.awayScore;
            this.match = bet.match;
            this.appUserId = bet.appUserId;
            this.winner = bet.winner;
        }
    }
}