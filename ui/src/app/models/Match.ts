import { Bet } from "./Bet"
import { Team } from "./Team"

export interface Match {
    id: string
    homeTeam: Team
    awayTeam: Team
    matchDate: Date
    homeGoals: number
    awayGoals: number
    matchBets: Bet[]
  }

  export class Match implements Match {
    constructor(init?: MatchFormValues) {
        Object.assign(this, init);
    } 
}

export class MatchDto {
    id?: string = undefined;

    constructor(match?: MatchDto) {
        if(match) {
            this.id = match.id;
        }
    }
}

export class MatchFormValues {
    id?: string = undefined;
    homeTeam: Team | null = null;
    awayTeam: Team | null = null;
    matchDate: Date | null = null;
    homeGoals: number = 0;
    awayGoals: number = 0;

    constructor(match?: MatchFormValues) {
        if(match) {
            this.id = match.id;
            this.homeTeam = match.homeTeam;
            this.awayTeam = match.awayTeam;
            this.matchDate = match.matchDate;
            this.homeGoals = match.homeGoals;
            this.awayGoals = match.awayGoals;
        }
    }
}