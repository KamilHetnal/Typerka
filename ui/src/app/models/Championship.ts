export interface Championship {
    id: string;
    title: string;
    country: string;
    winnerId: string;
    topScorerId: string;
  }
  
  export class Championship implements Championship {
    constructor(init?: ChampionshipDto) {
      Object.assign(this, init);
    }
  }
  
  export class ChampionshipDto {
    id?: string = undefined;
  
    constructor(championship?: ChampionshipDto) {
      if (championship) {
        this.id = championship.id;
      }
    }
  }