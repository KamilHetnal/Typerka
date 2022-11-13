export interface TopScorerBet {
    id: string
    topScorerId: string
    appUserId: string
    betPoints: number
  }

  export class TopScorerBet implements TopScorerBet {
    constructor(init?: TopScorerBetFormValues) {
        Object.assign(this, init);
    }
}

export class TopScorerBetFormValues {
    id?: string = undefined;
    topScorerId?: string = undefined;
    appUserId?: string = undefined;

    constructor(bet?: TopScorerBetFormValues) {
        if(bet) {
            this.id = bet.id;
            this.topScorerId = bet.topScorerId;
            this.appUserId = bet.appUserId;
        }
    }
}