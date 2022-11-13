export interface ChampionBet {
    id: string
    championId: string
    appUserId: string
    betPoints: number
  }

  export class ChampionBet implements ChampionBet {
    constructor(init?: ChampionBetFormValues) {
        Object.assign(this, init);
    }
}

export class ChampionBetFormValues {
    id?: string = undefined;
    championId?: string = undefined;
    appUserId?: string = undefined;

    constructor(bet?: ChampionBetFormValues) {
        if(bet) {
            this.id = bet.id;
            this.championId = bet.championId;
            this.appUserId = bet.appUserId;
        }
    }
}